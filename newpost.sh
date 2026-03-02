#!/bin/bash
title="$*"
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')
date=$(date +%Y-%m-%d)
filename="_posts/$date-$slug.md"
cat > "$filename" <<EOF
---
layout: post
title: "$title"
date: $date $(date +%T) +0700
categories:
tags:
---

Tulis konten Anda di sini...
EOF
echo "Postingan dibuat: $filename"
