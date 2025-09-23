# 🚀 Cloudflare 加速配置指南

本指南将帮助你将阿里云域名 `zeroisall.fun` 配置到 Cloudflare Pages，并启用 Cloudflare 的全球 CDN 加速。

## 📋 配置步骤

### 1. 将域名添加到 Cloudflare

#### 步骤 1.1：添加站点
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击 **Add a site**
3. 输入域名：`zeroisall.fun`
4. 选择 **Free** 计划（免费版已足够）
5. 点击 **Continue**

#### 步骤 1.2：扫描 DNS 记录
1. Cloudflare 会自动扫描你现有的 DNS 记录
2. 确认扫描结果，点击 **Continue**

#### 步骤 1.3：更改域名服务器
1. Cloudflare 会提供两个域名服务器地址，类似：
   ```
   dante.ns.cloudflare.com
   luna.ns.cloudflare.com
   ```
2. **在阿里云控制台更改域名服务器**：
   - 登录阿里云控制台
   - 进入 **域名** → **域名列表**
   - 找到 `zeroisall.fun` 域名
   - 点击 **管理**
   - 进入 **DNS 修改**
   - 将域名服务器更改为 Cloudflare 提供的地址
3. 在 Cloudflare 中点击 **Done, check nameservers**

### 2. 配置 DNS 记录

在 Cloudflare DNS 中配置以下记录：

#### 主要记录
```
类型: CNAME
名称: @
目标: fishcoen-github-io.pages.dev
代理状态: 已代理 (橙色云朵)
TTL: Auto

类型: CNAME
名称: www
目标: fishcoen-github-io.pages.dev
代理状态: 已代理 (橙色云朵)
TTL: Auto
```

#### 可选记录
```
类型: A
名称: @
IPv4 地址: 192.0.2.1
代理状态: 仅 DNS (灰色云朵)
TTL: Auto
```

### 3. 在 Cloudflare Pages 添加自定义域名

1. 进入 **Pages** → 选择你的项目
2. 点击 **Custom domains**
3. 点击 **Set up a custom domain**
4. 输入：`zeroisall.fun`
5. 点击 **Continue**
6. 等待 SSL 证书自动配置

### 4. 启用 Cloudflare 加速功能

#### 4.1 SSL/TLS 配置
1. 进入 **SSL/TLS** → **Overview**
2. 加密模式选择：**Full (strict)**
3. 启用 **Always Use HTTPS**

#### 4.2 缓存配置
1. 进入 **Caching** → **Configuration**
2. 缓存级别：**Standard**
3. 浏览器缓存 TTL：**4 hours**
4. 启用 **Development Mode**（开发时使用）

#### 4.3 页面规则优化
进入 **Rules** → **Page Rules**，创建以下规则：

**规则 1：静态资源长期缓存**
```
URL: zeroisall.fun/assets/*
设置:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year
- Browser Cache TTL: 1 year
```

**规则 2：HTML 页面缓存**
```
URL: zeroisall.fun/*
设置:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
- Browser Cache TTL: 4 hours
```

#### 4.4 速度优化
1. **进入 Speed** → **Optimization**
2. 启用以下功能：
   - ✅ **Auto Minify** (HTML, CSS, JS)
   - ✅ **Brotli** 压缩
   - ✅ **Rocket Loader**
   - ✅ **Mirage** (移动端图片优化)

#### 4.5 网络优化
1. **进入 Network**
2. 启用：
   - ✅ **HTTP/2**
   - ✅ **HTTP/3 (with QUIC)**
   - ✅ **0-RTT Connection Resumption**

### 5. 高级配置（可选）

#### 5.1 安全设置
1. **进入 Security** → **Settings**
2. 安全级别：**Medium**
3. 启用 **Bot Fight Mode**

#### 5.2 分析配置
1. **进入 Analytics** → **Web Analytics**
2. 启用 **Web Analytics**（免费）

#### 5.3 移动端优化
1. **进入 Speed** → **Optimization**
2. 启用 **Mirage** 和 **Polish**

## 🔧 验证配置

### 1. DNS 传播检查
使用以下工具检查 DNS 传播：
- [DNS Checker](https://dnschecker.org/)
- [What's My DNS](https://whatsmydns.net/)

### 2. 网站访问测试
- 主域名：`https://zeroisall.fun`
- www 子域名：`https://www.zeroisall.fun`
- 检查 HTTPS 证书是否正常

### 3. 性能测试
使用以下工具测试网站性能：
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 📊 监控和维护

### 1. Cloudflare Analytics
- 访问统计
- 带宽使用
- 缓存命中率
- 安全事件

### 2. 性能监控
- 页面加载时间
- 缓存效果
- 全球访问速度

### 3. 定期检查
- SSL 证书状态
- DNS 记录正确性
- 缓存规则有效性

## 🚨 常见问题

### DNS 传播慢
- 等待 24-48 小时完全传播
- 清除本地 DNS 缓存
- 使用不同的 DNS 服务器测试

### SSL 证书问题
- 确保 DNS 记录正确
- 等待证书自动签发（最多 24 小时）
- 检查域名是否被代理（橙色云朵）

### 缓存问题
- 使用 **Purge Cache** 清除缓存
- 开发时启用 **Development Mode**
- 检查页面规则是否正确

## 🎉 完成

配置完成后，你的网站将享受：
- 🌍 全球 CDN 加速
- 🔒 免费 SSL 证书
- 🛡️ DDoS 防护
- 📊 详细分析数据
- ⚡ 极速访问体验

访问 `https://zeroisall.fun` 体验加速效果！
