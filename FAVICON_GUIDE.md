# 自定义 Favicon 指南

## 📋 步骤说明

### 1. 准备图片
- 准备一个 **512x512 像素或更大** 的方形图片
- 支持格式：PNG、JPG 或 SVG
- 建议使用 PNG 格式以获得最佳效果

### 2. 生成 Favicon
1. 访问 [Real Favicon Generator](https://realfavicongenerator.net/)
2. 点击 **"Select your Favicon image"** 上传你的图片
3. 保持默认选项，滚动到页面底部
4. 点击 **"Generate your Favicons and HTML code"** 生成 favicon

### 3. 下载并替换
1. 下载生成的压缩包
2. 解压后**删除**以下两个文件：
   - `browserconfig.xml`
   - `site.webmanifest`
3. 将剩余的图片文件（.PNG 和 .ICO）复制到 `assets/img/favicons/` 目录

### 4. 文件说明
| 文件类型 | 在线工具生成 | Chirpy 主题 |
|---------|-------------|------------|
| *.PNG   | ✓ 保留      | ✗ 删除     |
| *.ICO   | ✓ 保留      | ✗ 删除     |

### 5. 验证
- 重新构建网站后，favicon 将显示为自定义版本
- 清除浏览器缓存以确保看到更新

## 🎯 当前配置
- **Favicon 目录**: `assets/img/favicons/`
- **配置文件**: `_config.yml` 中的 `favicon` 设置
- **当前状态**: 已配置正确的目录结构

## 📝 注意事项
- 确保所有 favicon 文件都放在 `assets/img/favicons/` 目录中
- 不要删除 `browserconfig.xml` 和 `site.webmanifest` 文件
- 重新构建网站后 favicon 才会生效
