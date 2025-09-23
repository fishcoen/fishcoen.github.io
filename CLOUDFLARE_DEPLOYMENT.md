# 🚀 Cloudflare Pages 部署指南

本指南将帮助你在 Cloudflare Pages 上部署你的 Jekyll Chirpy 博客。

## 📋 前置要求

1. **Cloudflare 账户** - 如果没有，请先注册 [Cloudflare](https://dash.cloudflare.com/sign-up)
2. **GitHub 仓库** - 将你的博客代码推送到 GitHub
3. **Ruby 环境** - 本地开发需要 Ruby 3.0+

## 🔧 配置步骤

### 1. 准备 GitHub 仓库

确保你的代码已经推送到 GitHub 仓库：

```bash
git add .
git commit -m "Add Cloudflare Pages configuration"
git push origin main
```

### 2. 登录 Cloudflare Pages

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击左侧菜单的 **Pages**
3. 点击 **Create a project**

### 3. 连接 GitHub 仓库

1. 选择 **Connect to Git**
2. 授权 Cloudflare 访问你的 GitHub 账户
3. 选择你的博客仓库
4. 点击 **Begin setup**

### 4. 配置构建设置

在 **Build settings** 页面配置以下内容：

#### 框架预设
- **Framework preset**: `None` 或 `Jekyll`

#### 构建命令
```bash
bundle exec jekyll build
```

#### 构建输出目录
```
_site
```

#### 根目录
```
/
```

#### 环境变量
- `JEKYLL_ENV`: `production`
- `BUNDLE_WITHOUT`: `development test`

### 5. 高级设置

在 **Environment variables** 中添加：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `JEKYLL_ENV` | `production` | Jekyll 环境 |
| `BUNDLE_WITHOUT` | `development test` | 排除开发依赖 |

### 6. 部署

1. 点击 **Save and Deploy**
2. 等待构建完成（通常需要 2-5 分钟）
3. 构建成功后，你会得到一个 `*.pages.dev` 的域名

## 🌐 配置阿里云域名 zeroisall.fun

### 1. 在 Cloudflare Pages 添加自定义域名

1. 在 Pages 项目页面，点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名：`zeroisall.fun`
4. 点击 **Continue**

### 2. 配置 DNS 记录

#### 方法一：使用 Cloudflare DNS（推荐）

1. **将域名添加到 Cloudflare**：
   - 在 Cloudflare Dashboard 点击 **Add a site**
   - 输入 `zeroisall.fun`
   - 选择免费计划
   - 按照提示更改域名服务器

2. **配置 DNS 记录**：
   ```
   类型: CNAME
   名称: @
   目标: fishcoen.pages.dev
   TTL: Auto
   
   类型: CNAME  
   名称: www
   目标: fishcoen.pages.dev
   TTL: Auto
   ```

#### 方法二：在阿里云配置 DNS

如果你不想将域名完全迁移到 Cloudflare，可以在阿里云 DNS 中配置：

1. **登录阿里云控制台**
2. **进入域名解析 DNS**
3. **添加解析记录**：
   ```
   记录类型: CNAME
   主机记录: @
   解析路线: 默认
   记录值: fishcoen.pages.dev
   TTL: 600
   
   记录类型: CNAME
   主机记录: www  
   解析路线: 默认
   记录值: fishcoen.pages.dev
   TTL: 600
   ```

### 3. 启用 Cloudflare 加速

#### 在 Cloudflare Dashboard 中配置：

1. **SSL/TLS 设置**：
   - 进入 **SSL/TLS** → **Overview**
   - 选择 **Full (strict)** 模式

2. **缓存设置**：
   - 进入 **Caching** → **Configuration**
   - 缓存级别：**Standard**
   - 浏览器缓存 TTL：**4 hours**

3. **页面规则优化**：
   ```
   规则 1: zeroisall.fun/*
   设置: Cache Level = Cache Everything, Edge Cache TTL = 1 month
   
   规则 2: zeroisall.fun/assets/*
   设置: Cache Level = Cache Everything, Edge Cache TTL = 1 year
   ```

4. **启用 Brotli 压缩**：
   - 进入 **Speed** → **Optimization**
   - 启用 **Brotli** 压缩

5. **启用 HTTP/2 和 HTTP/3**：
   - 进入 **Network**
   - 启用 **HTTP/2** 和 **HTTP/3 (with QUIC)**

### 4. 验证配置

等待 DNS 传播（通常 5-30 分钟），然后访问：
- `https://zeroisall.fun` - 主域名
- `https://www.zeroisall.fun` - www 子域名

## 🔧 本地测试

在部署前，建议先在本地测试：

```bash
# 安装依赖
bundle install

# 本地构建测试
bundle exec jekyll build

# 本地预览
bundle exec jekyll serve
```

## 📁 项目文件说明

### 新增的配置文件

- `_headers` - Cloudflare Pages 安全头配置
- `_redirects` - 重定向规则配置
- `wrangler.toml` - Cloudflare 配置文件
- `package.json` - Node.js 项目配置
- `cloudflare-build.sh` - 自定义构建脚本

### 修改的配置文件

- `_config.yml` - 更新了 URL 配置

## 🚨 常见问题

### 构建失败

1. **Ruby 版本问题**
   - 确保使用 Ruby 3.0+
   - 在 `package.json` 中指定 Ruby 版本

2. **依赖安装失败**
   - 检查 `Gemfile` 是否正确
   - 确保所有 gem 版本兼容

3. **Jekyll 构建错误**
   - 检查 `_config.yml` 语法
   - 确保所有必需的文件存在

### 部署后问题

1. **页面显示异常**
   - 检查 `_config.yml` 中的 `url` 配置
   - 确保 `baseurl` 设置正确

2. **静态资源加载失败**
   - 检查 `_headers` 文件配置
   - 确保资源路径正确

## 🔄 自动部署

每次推送到 GitHub 主分支时，Cloudflare Pages 会自动重新构建和部署你的网站。

## 📊 监控和分析

1. **构建日志** - 在 Pages 项目页面查看构建日志
2. **访问统计** - 使用 Cloudflare Analytics 查看访问数据
3. **性能监控** - 利用 Cloudflare 的全球 CDN 加速

## 🎉 完成

部署完成后，你的博客将在 `https://fishcoen.pages.dev` 上运行！

如果需要帮助，请查看 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)。
