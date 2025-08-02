import React, { useState, useEffect } from "react";
import "./admin.scss";

interface SquareApiTest {
  success: boolean;
  message?: string;
  error?: string;
  details?: string;
  data?: any;
  meta?: any;
  help?: any;
}

export default function SquareIntegration() {
  const [testResult, setTestResult] = useState<SquareApiTest | null>(null);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [realProducts, setRealProducts] = useState<any[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [dataSource, setDataSource] = useState<"dummy" | "square">("dummy");

  const testSquareConnection = async () => {
    setIsTestingConnection(true);
    setTestResult(null);

    try {
      const response = await fetch(
        "http://localhost:8001/api/v1/square-catalog/test"
      );
      const result = await response.json();
      setTestResult(result);
    } catch (error: any) {
      setTestResult({
        success: false,
        error: "Failed to connect to backend",
        details: error.message,
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  const loadRealProducts = async () => {
    setIsLoadingProducts(true);
    setRealProducts([]);

    try {
      const response = await fetch(
        "http://localhost:8001/api/v1/square-catalog/products"
      );
      const result = await response.json();

      if (result.success) {
        setRealProducts(result.data || []);
        setDataSource("square");
      } else {
        console.error("Failed to load real products:", result);
      }
    } catch (error: any) {
      console.error("Error loading real products:", error);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  const switchToSquareData = async () => {
    // Update the search API to use Square data by default
    localStorage.setItem("dataSource", "square");
    setDataSource("square");

    // Reload the page to use Square data
    window.location.reload();
  };

  const switchToDummyData = () => {
    localStorage.setItem("dataSource", "dummy");
    setDataSource("dummy");
    window.location.reload();
  };

  useEffect(() => {
    const savedDataSource =
      (localStorage.getItem("dataSource") as "dummy" | "square") || "dummy";
    setDataSource(savedDataSource);
  }, []);

  return (
    <div className="square-integration">
      <div className="integration-header">
        <h2>Square Integration</h2>
        <p>
          Manage your Square catalog integration and switch between dummy and
          real data.
        </p>
      </div>

      <div className="integration-sections">
        {/* Data Source Selector */}
        <div className="integration-section">
          <h3>Data Source</h3>
          <div className="data-source-selector">
            <div className="source-option">
              <label>
                <input
                  type="radio"
                  name="dataSource"
                  value="dummy"
                  checked={dataSource === "dummy"}
                  onChange={() => setDataSource("dummy")}
                />
                <div className="option-content">
                  <strong>Dummy Data</strong>
                  <p>
                    Use demo products (Attack Titan, Tanjiro, etc.) for testing
                  </p>
                </div>
              </label>
            </div>

            <div className="source-option">
              <label>
                <input
                  type="radio"
                  name="dataSource"
                  value="square"
                  checked={dataSource === "square"}
                  onChange={() => setDataSource("square")}
                />
                <div className="option-content">
                  <strong>Real Square Data</strong>
                  <p>Use actual products from your Square catalog</p>
                </div>
              </label>
            </div>
          </div>

          <div className="source-actions">
            {dataSource === "dummy" ? (
              <button className="btn-switch" onClick={switchToSquareData}>
                Switch to Real Square Data
              </button>
            ) : (
              <button
                className="btn-switch secondary"
                onClick={switchToDummyData}
              >
                Switch to Dummy Data
              </button>
            )}
          </div>
        </div>

        {/* Square API Test */}
        <div className="integration-section">
          <h3>Square API Connection</h3>
          <div className="api-test">
            <button
              className="btn-test"
              onClick={testSquareConnection}
              disabled={isTestingConnection}
            >
              {isTestingConnection
                ? "Testing..."
                : "Test Square API Connection"}
            </button>

            {testResult && (
              <div
                className={`test-result ${
                  testResult.success ? "success" : "error"
                }`}
              >
                <div className="result-header">
                  <span className="status-icon">
                    {testResult.success ? "✅" : "❌"}
                  </span>
                  <span className="status-text">
                    {testResult.success
                      ? "Connection Successful"
                      : "Connection Failed"}
                  </span>
                </div>

                {testResult.message && (
                  <p className="result-message">{testResult.message}</p>
                )}

                {testResult.error && (
                  <p className="result-error">{testResult.error}</p>
                )}

                {testResult.details && (
                  <p className="result-details">{testResult.details}</p>
                )}

                {testResult.data && (
                  <div className="result-data">
                    <h4>API Response:</h4>
                    <ul>
                      <li>Products Found: {testResult.data.productsFound}</li>
                      <li>
                        Has More: {testResult.data.hasMore ? "Yes" : "No"}
                      </li>
                      {testResult.data.sampleProduct && (
                        <li>
                          Sample Product: {testResult.data.sampleProduct.name}
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {testResult.help && (
                  <div className="result-help">
                    <h4>Configuration Help:</h4>
                    {typeof testResult.help === "string" ? (
                      <p>{testResult.help}</p>
                    ) : (
                      <>
                        <p>{testResult.help.message}</p>
                        {testResult.help.requiredEnvVars && (
                          <div>
                            <strong>Required Environment Variables:</strong>
                            <ul>
                              {testResult.help.requiredEnvVars.map(
                                (envVar: string, index: number) => (
                                  <li key={index}>{envVar}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                        {testResult.help.documentation && (
                          <p>
                            <a
                              href={testResult.help.documentation}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Square API Documentation
                            </a>
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Real Products Preview */}
        <div className="integration-section">
          <h3>Real Square Products</h3>
          <div className="products-preview">
            <button
              className="btn-load"
              onClick={loadRealProducts}
              disabled={isLoadingProducts}
            >
              {isLoadingProducts
                ? "Loading..."
                : "Load Real Products from Square"}
            </button>

            {realProducts.length > 0 && (
              <div className="products-list">
                <h4>
                  Found {realProducts.length} products in your Square catalog:
                </h4>
                <div className="products-grid">
                  {realProducts.slice(0, 6).map((product, index) => (
                    <div key={index} className="product-preview">
                      <img
                        src={product.img}
                        alt={product.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/150x150?text=No+Image";
                        }}
                      />
                      <div className="product-info">
                        <h5>{product.name}</h5>
                        <p>${product.price}</p>
                        <span className="product-source">Real Square Data</span>
                      </div>
                    </div>
                  ))}
                </div>
                {realProducts.length > 6 && (
                  <p className="products-more">
                    ...and {realProducts.length - 6} more products
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="integration-section">
          <h3>Setup Instructions</h3>
          <div className="setup-instructions">
            <div className="instruction-step">
              <h4>1. Square API Credentials</h4>
              <p>
                Add these environment variables to your <code>.env</code> file:
              </p>
              <pre>
                {`SQUARE_APPLICATION_ID=your_application_id
SQUARE_ACCESS_TOKEN=your_access_token
SQUARE_LOCATION_ID=your_location_id`}
              </pre>
            </div>

            <div className="instruction-step">
              <h4>2. Get Square Credentials</h4>
              <ol>
                <li>Log in to your Square Developer Dashboard</li>
                <li>Create a new application or use existing one</li>
                <li>Copy the Application ID and Access Token</li>
                <li>Get your Location ID from the Square Dashboard</li>
              </ol>
            </div>

            <div className="instruction-step">
              <h4>3. Test Integration</h4>
              <p>
                Once credentials are configured, use the "Test Square API
                Connection" button above to verify everything is working
                correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
