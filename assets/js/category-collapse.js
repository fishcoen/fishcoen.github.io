// 分类页面二级分类折叠功能
document.addEventListener('DOMContentLoaded', function() {
    // 查找所有有子分类的一级分类
    const categoryItems = document.querySelectorAll('.category-list .category-item');
    
    categoryItems.forEach(function(item) {
        const subcategories = item.querySelector('.subcategory');
        if (subcategories) {
            // 添加点击事件监听器
            const header = item.querySelector('.category-header') || item.querySelector('h3') || item.querySelector('h2');
            if (header) {
                header.style.cursor = 'pointer';
                header.addEventListener('click', function(e) {
                    e.preventDefault();
                    item.classList.toggle('expanded');
                });
            }
        }
    });
});
