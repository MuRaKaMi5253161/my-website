"use client";

import Title from "@/components/item/Title";
import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Title title="about" />
      <Box
        component="img"
        alt="profileIcon"
        src="./icon/icon.jpg"
        sx={{
          width: "130px",
          height: "130px",
          margin: "0 auto",
          marginTop: "50px",
          border: "1px solid #2a2a2a",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          marginTop: "60px",
        }}
      >
        <Box sx={{ width: "45%" }}>
          <Typography sx={{ fontSize: "20px" }}>村上太一</Typography>
          <Typography sx={{ fontSize: "13px", marginTop: "10px" }}>
            2001年生まれの東京で働くソフトウェアエンジニア。
            <br />
            2022年にシステムエンジニアとしてキャリアをスタートし、2025年に独立、フリーランスエンジニアへ。
            <br />
            Webアプリ開発、特にフロントエンド開発を得意とし、要件定義から設計、デザイン、開発、テスト、運用まで幅広く対応可能。
            <br />
            人々が触り心地いいアプリをAI等の最新技術を使いよりスピーディーに開発することを心がけている。
          </Typography>
          <Typography sx={{ fontSize: "13px", marginTop: "10px" }}>
            また2023年には、DTM(Desktop
            Music)を始め、自身のオリジナル楽曲の制作を始め、
            アーティスト＆トラックメイカー「D_R」として音楽活動を開始する。
            <br />
            幼少から音楽が好きで、特にJpop / R&B / soul /
            ボカロを好んで聴いており、幅広い音楽ジャンルに触れ、育った。
            <br />
            そのため、自身の楽曲はミクスチャーな音楽性を持ち、多くの人々に新しく懐かしい感覚をもたらす楽曲の制作を心がけている。
          </Typography>
        </Box>
        <Box sx={{ width: "45%", marginLeft: "20px" }}>
          <Typography sx={{ fontSize: "20px" }}>Taichi Murakami</Typography>
          <Typography sx={{ fontSize: "13px", marginTop: "10px" }}>
            A software engineer born in 2001 and working in Tokyo.
            <br />
            He will start his career as a systems engineer in 2022, and become
            independent and a freelance engineer in 2025.
            <br />
            We specialize in web application development, especially front-end
            development, and can handle a wide range of tasks from requirements
            definition to design, development, testing, and operation.
            <br />
            We strive to use the latest technologies such as AI to develop apps
            that people find easy to use more quickly.
          </Typography>
          <Typography sx={{ fontSize: "13px", marginTop: "10px" }}>
            In 2023, he will begin working on DTM (Desktop Music) and producing
            his own original music, and will begin his musical career as an
            artist and track maker called D_R.
            <br />
            She has loved music since she was a child, especially J-pop, R&B,
            soul, and vocaloid, and was exposed to a wide range of music genres
            as she grew up.
            <br />
            For this reason, his songs have a mixed musicality, and he strives
            to create music that brings a new yet nostalgic feeling to many
            people.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
