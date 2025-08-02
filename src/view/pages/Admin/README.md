# 🎌 Admin Dashboard

React-based admin panel for managing the Spin Hobby anime store.

## 🚀 Access

1. **Login as Beta User** at `/login`
2. **Click "🎌 Admin Dashboard"** link
3. **Navigate to** `http://localhost:3000/admin`

## 📱 Features

### **Category Management** (`/admin`)

- ✅ **View all categories** with stats and product counts
- ✅ **Toggle featured status** with featured ordering
- ✅ **Show/hide categories** from customer view
- ✅ **Bulk actions** (feature, unfeature, show, hide multiple)
- ✅ **Category stats** (total, featured, visible, hidden)
- ✅ **Real-time updates** via admin APIs

### **Category Editor** (`/admin/categories/:id`)

- ✅ **Edit custom names** and descriptions
- ✅ **Set featured status** and order
- ✅ **Toggle visibility**
- ✅ **Add admin notes**
- ✅ **View category stats** (product count, type)

### **Upcoming Features**

- 🔄 **Product Management** (`/admin/products`)
- 🔄 **Order Management** (`/admin/orders`)
- 🔄 **Product-Category Assignment**
- 🔄 **Inventory Sync with Square**

## 🎯 API Integration

Connects to backend admin endpoints:

- `GET /api/v1/admin/categories` - List categories
- `PUT /api/v1/admin/categories/:id/featured` - Toggle featured
- `PUT /api/v1/admin/categories/:id/visibility` - Toggle visibility
- `PUT /api/v1/admin/categories/:id/customize` - Update custom fields
- `POST /api/v1/admin/categories/bulk-actions` - Bulk operations

## 🎨 UI Components

### **Admin Stats Cards**

```jsx
<div className="admin-stats">
  <div className="stat-card">
    <h3>18</h3>
    <p>Total Categories</p>
  </div>
  <div className="stat-card featured">
    <h3>10</h3>
    <p>Featured</p>
  </div>
</div>
```

### **Bulk Actions**

```jsx
<div className="bulk-actions">
  <select value={bulkAction} onChange={setBulkAction}>
    <option value="feature">Make Featured</option>
    <option value="hide">Hide Categories</option>
  </select>
  <button onClick={handleBulkAction}>
    Apply to {selectedCategories.length} items
  </button>
</div>
```

### **Category Table**

- ✅ **Sortable columns** (name, products, status)
- ✅ **Status badges** (featured, hidden, subcategory)
- ✅ **Toggle buttons** for quick actions
- ✅ **Action buttons** (edit, manage products)
- ✅ **Checkbox selection** for bulk operations

## 📱 Responsive Design

- ✅ **Desktop-first** layout with sidebar navigation
- ✅ **Mobile-optimized** tables and forms
- ✅ **Flexible grid** layouts for different screen sizes
- ✅ **Touch-friendly** buttons and controls

## 🔒 Security Notes

- **Beta Access Required**: Only accessible after beta login
- **API Authentication**: All requests use backend session auth
- **Input Validation**: Form validation on both frontend and backend
- **CSRF Protection**: Backend handles security headers

## 🛠 Development

### **File Structure**

```
spin-hobby/src/view/pages/Admin/
├── index.tsx           # Main admin router + category management
├── CategoryEdit.tsx    # Individual category editor
├── admin.scss         # Comprehensive styling
└── README.md          # This documentation
```

### **Adding New Admin Pages**

1. **Create component** in `/Admin/` folder
2. **Add route** to `AdminDashboard` component
3. **Add navigation link** in admin header
4. **Style with** existing `.admin-*` classes

Example:

```jsx
// In AdminDashboard component
<Route path="/products" element={<ProductManagement />} />

// In admin header nav
<Link to="/admin/products" className="nav-link">Products</Link>
```

## 🎉 Demo Data

Works with seeded data from SQL seeds:

- **18 Categories** (main + subcategories + series)
- **15 Products** across multiple categories
- **43 Relationships** (many-to-many product-category)

Perfect for testing all admin functionality!
