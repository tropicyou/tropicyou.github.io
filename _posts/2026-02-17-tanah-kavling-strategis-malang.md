---
title: Tanah Untuk Kavling Strategis Malang
---

<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tanah Untuk Kavling Strategis Malang</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #e8f5e9 0%, #e1f5fe 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .poster-container {
            max-width: 720px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            min-height: 1200px;
        }
        
        .header {
            background: linear-gradient(135deg, #2e7d32 0%, #00897b 100%);
            color: white;
            padding: 40px 30px;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 300px;
            height: 300px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
        }
        
        .header::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: -10%;
            width: 200px;
            height: 200px;
            background: rgba(255,255,255,0.08);
            border-radius: 50%;
        }
        
        .sale-badge {
            background: #ff6b35;
            color: white;
            padding: 8px 20px;
            border-radius: 30px;
            font-weight: 700;
            display: inline-block;
            margin-bottom: 15px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .title {
            font-family: 'Montserrat', sans-serif;
            font-size: 42px;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .location {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 18px;
            opacity: 0.95;
        }
        
        .location i {
            font-size: 22px;
        }
        
        .main-image {
            width: 100%;
            height: 280px;
            object-fit: cover;
            position: relative;
        }
        
        .image-container {
            position: relative;
            padding: 0;
        }
        
        .price-tag {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: rgba(255,107,53,0.95);
            color: white;
            padding: 15px 30px;
            border-radius: 16px;
            font-weight: 800;
            font-size: 32px;
            box-shadow: 0 8px 24px rgba(255,107,53,0.4);
            font-family: 'Montserrat', sans-serif;
        }
        
        .price-note {
            font-size: 14px;
            font-weight: 400;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px;
        }
        
        .section-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 24px;
            font-weight: 700;
            color: #2e7d32;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section-title i {
            font-size: 28px;
        }
        
        .specs-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .spec-card {
            background: linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%);
            padding: 20px;
            border-radius: 16px;
            border-left: 4px solid #2e7d32;
        }
        
        .spec-label {
            font-size: 13px;
            color: #666;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .spec-value {
            font-size: 22px;
            font-weight: 700;
            color: #2e7d32;
            font-family: 'Montserrat', sans-serif;
        }
        
        .facilities {
            background: linear-gradient(135deg, #e0f2f1 0%, #e8f5e9 100%);
            padding: 25px;
            border-radius: 16px;
            margin-bottom: 30px;
        }
        
        .facility-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(46,125,50,0.1);
        }
        
        .facility-item:last-child {
            border-bottom: none;
        }
        
        .facility-icon {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #00897b;
            box-shadow: 0 2px 8px rgba(0,137,123,0.15);
        }
        
        .facility-text {
            flex: 1;
        }
        
        .facility-title {
            font-weight: 600;
            color: #263238;
            font-size: 16px;
        }
        
        .facility-desc {
            font-size: 13px;
            color: #666;
            margin-top: 2px;
        }
        
        .map-section {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 16px;
            margin-bottom: 30px;
        }
        
        .map-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 15px;
            background: white;
            border-radius: 12px;
            text-decoration: none;
            color: #1976d2;
            font-weight: 600;
            margin-bottom: 10px;
            transition: all 0.3s;
            border: 2px solid transparent;
        }
        
        .map-link:hover {
            border-color: #1976d2;
            transform: translateX(5px);
        }
        
        .gps-coords {
            font-family: 'Courier New', monospace;
            font-size: 13px;
            color: #666;
            background: white;
            padding: 12px;
            border-radius: 8px;
            text-align: center;
        }
        
        .contact-section {
            background: linear-gradient(135deg, #00897b 0%, #2e7d32 100%);
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            color: white;
        }
        
        .contact-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            font-family: 'Montserrat', sans-serif;
        }
        
        .wa-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #25d366;
            color: white;
            padding: 16px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 18px;
            transition: all 0.3s;
            box-shadow: 0 8px 24px rgba(37,211,102,0.4);
        }
        
        .wa-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 32px rgba(37,211,102,0.5);
        }
        
        .wa-button i {
            font-size: 24px;
        }
        
        .footer {
            background: #263238;
            color: white;
            padding: 20px 30px;
            text-align: center;
            font-size: 13px;
            opacity: 0.9;
        }
        
        .highlight-box {
            background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
            border-left: 4px solid #ff6b35;
            padding: 15px 20px;
            border-radius: 12px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .highlight-box i {
            color: #ff6b35;
            font-size: 28px;
        }
        
        .highlight-text {
            flex: 1;
            font-weight: 600;
            color: #e65100;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="poster-container">
        <div class="header">
            <div class="sale-badge">🚀 PENAWARAN TERBATAS</div>
            <div class="title">DI JUAL TANAH UNTUK KAVLING STRATEGIS</div>
            <div class="location">
                <i class="material-icons">location_on</i>
                <span>Bandungrejosari, Sukun, Malang Kota</span>
            </div>
        </div>
        
        <div class="image-container">
            <img src="https://sfile.chatglm.cn/images-ppt/239e788a1473.jpg" alt="Greenhouse" class="main-image">
            <div class="price-tag">
                950 Juta
                <div class="price-note">NEGO • Tanpa Perantara</div>
            </div>
        </div>
        
        <div class="content">
            <div class="highlight-box">
                <i class="material-icons">stars</i>
                <div class="highlight-text">
                    Lokasi mepet perumahan padat! Cocok untuk kavlingan, kolam ikan, pertanian organik, atau perluasan halaman rumah
                </div>
            </div>
            
            <div class="section-title">
                <i class="material-icons">landscape</i>
                Spesifikasi Tanah
            </div>
            
            <div class="specs-grid">
                <div class="spec-card">
                    <div class="spec-label">Luas Tanah</div>
                    <div class="spec-value">790 m²</div>
                </div>
                <div class="spec-card">
                    <div class="spec-label">Sertifikat</div>
                    <div class="spec-value">SHM</div>
                </div>
                <div class="spec-card">
                    <div class="spec-label">Status</div>
                    <div class="spec-value">Siap Bangun</div>
                </div>
                <div class="spec-card">
                    <div class="spec-label">Listrik</div>
                    <div class="spec-value">450 VA</div>
                </div>
            </div>
            
            <div class="section-title">
                <i class="material-icons">home_work</i>
                Fasilitas Lengkap
            </div>
            
            <div class="facilities">
                <div class="facility-item">
                    <div class="facility-icon">
                        <i class="material-icons">spa</i>
                    </div>
                    <div class="facility-text">
                        <div class="facility-title">Green House 6x12 Meter</div>
                        <div class="facility-desc">Siap untuk budidaya tanaman organik</div>
                    </div>
                </div>
                
                <div class="facility-item">
                    <div class="facility-icon">
                        <i class="material-icons">water_drop</i>
                    </div>
                    <div class="facility-text">
                        <div class="facility-title">Sumur Bor 32 Meter</div>
                        <div class="facility-desc">Pompa submersible 1/2 PK, debit air melimpah</div>
                    </div>
                </div>
                
                <div class="facility-item">
                    <div class="facility-icon">
                        <i class="material-icons">deck</i>
                    </div>
                    <div class="facility-text">
                        <div class="facility-title">Gazebo & Gudang</div>
                        <div class="facility-desc">Tempat istirahat dan penyimpanan peralatan</div>
                    </div>
                </div>
                
                <div class="facility-item">
                    <div class="facility-icon">
                        <i class="material-icons">waves</i>
                    </div>
                    <div class="facility-text">
                        <div class="facility-title">Mepet Kali Utama</div>
                        <div class="facility-desc">Sebelah timur, sumber air alami</div>
                    </div>
                </div>
            </div>
            
            <div class="section-title">
                <i class="material-icons">map</i>
                Lokasi Strategis
            </div>
            
            <div class="map-section">
                <a href="https://maps.app.goo.gl/iMobdA4uSxqPqvWN9" class="map-link" target="_blank">
                    <i class="material-icons">directions</i>
                    <span>Lihat Lokasi di Google Maps</span>
                    <i class="material-icons" style="margin-left: auto;">arrow_forward</i>
                </a>
                <div class="gps-coords">
									
									<div class="map-section">
                <a href="https://youtu.be/csyCeLujSHg" class="map-link" target="_blank">
                    <i class="material-icons">directions</i>
                    <span>Preview Suasana dan Lokasi</span>
                    <i class="material-icons" style="margin-left: auto;">arrow_forward</i>
                </a>
                <div class="gps-coords">
                    📍 Koordinat GPS: -7.9962337, 112.6066795
                </div>
            </div>
            
            <div class="contact-section">
                <div class="contact-title">Hubungi Langsung Pemilik</div>
                <a href="https://wa.me/6287765451798" class="wa-button" target="_blank">
                    <i class="material-icons">chat</i>
                    WhatsApp Sekarang
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2026 TropicYou • Tanpa Perantara • Harga Terjangkau</p>
        </div>
    </div>
</body>
</html>``
