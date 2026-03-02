#!/bin/bash

# Warna untuk output (opsional)
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fungsi untuk menampilkan pesan error dan keluar
error_exit() {
    echo -e "${RED}Error: $1${NC}" >&2
    exit 1
}

# Cek apakah kita berada di dalam repository git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    error_exit "Bukan direktori repository git!"
fi

# 1. Tampilkan status
echo -e "${YELLOW}>>> Menjalankan git status...${NC}"
git status

# 2. Tambahkan semua perubahan
echo -e "${YELLOW}>>> Menambahkan semua perubahan (git add .)${NC}"
git add .

# 3. Minta konfirmasi pesan commit
default_msg="Initial ddd"
echo -e "${YELLOW}>>> Pesan commit default: '$default_msg'${NC}"
read -p "Tekan Enter untuk menggunakan pesan default, atau ketik pesan baru: " user_msg

if [ -z "$user_msg" ]; then
    commit_msg="$default_msg"
else
    commit_msg="$user_msg"
fi

# 4. Commit
echo -e "${YELLOW}>>> Melakukan commit dengan pesan: '$commit_msg'${NC}"
git commit -m "$commit_msg"
if [ $? -ne 0 ]; then
    error_exit "Commit gagal. Mungkin tidak ada perubahan yang perlu di-commit."
fi

# 5. Pull dari remote main
echo -e "${YELLOW}>>> Menarik perubahan terbaru dari remote (git pull origin main)${NC}"
git pull origin main
if [ $? -ne 0 ]; then
    error_exit "Pull gagal. Periksa koneksi atau konflik merge."
fi

# 6. Push ke remote main
echo -e "${YELLOW}>>> Mengirim perubahan ke remote (git push origin main)${NC}"
git push origin main
if [ $? -ne 0 ]; then
    error_exit "Push gagal. Periksa kredensial atau akses remote."
fi

echo -e "${GREEN}✔ Semua langkah berhasil!${NC}"
