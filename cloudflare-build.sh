#!/bin/bash

# Cloudflare Pages 构建脚本
set -e

echo "🚀 开始构建 Jekyll 博客..."

# 安装 Ruby 依赖
echo "📦 安装 Ruby 依赖..."
bundle config set --local deployment 'true'
bundle config set --local without 'development test'
bundle install

# 构建 Jekyll 站点
echo "🔨 构建 Jekyll 站点..."
bundle exec jekyll build

echo "✅ 构建完成！"
