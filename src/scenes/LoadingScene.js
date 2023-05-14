import Phaser from "phaser";
import bgImg from "../assets/images/background.png";
import explosionImg from "../assets/spritesheets/explosion.png";
import expUpImg from "../assets/spritesheets/power-up.png";
import catImg from "../assets/images/cat-rainbow.png";
import beamImg from "../assets/spritesheets/beam.png";
import fontPng from "../assets/font/font.png";
import fontXml from "../assets/font/font.xml";
import fireOgg from "../assets/sounds/fire.ogg";
import popOgg from "../assets/sounds/pop.ogg";
import pickOgg from "../assets/sounds/pickPowerUp.ogg";
import hurtOgg from "../assets/sounds/hurt.ogg";
import gameoverOgg from "../assets/sounds/gameover.ogg";
import bgmOgg from "../assets/sounds/lofi-bgm.ogg";
import pauseIn from "../assets/sounds/pauseIn.ogg";
import pauseOut from "../assets/sounds/pauseOut.ogg";
import hitMobOgg from "../assets/sounds/hitMob.ogg";
import batImg from "../assets/spritesheets/bat.png";
import dogImg from "../assets/spritesheets/dog.png";
import playerImg from "../assets/spritesheets/player.png";
import enemyImg from "../assets/spritesheets/enemy.png";
import test1Img from "../assets/spritesheets/test1.png";
import test2Img from "../assets/spritesheets/test2.png";
import eyeballImg from "../assets/spritesheets/eyeball.png";

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
    // bootGame : 이 scene의 identifier
  }

  preload() {
    this.load.image("background", bgImg);
    this.load.spritesheet("player", playerImg, {
      frameWidth: 100,
      frameHeight: 100,
    });
    this.load.spritesheet("enemy", enemyImg, {
      frameWidth: 70,
      frameHeight: 150,
    });
    this.load.spritesheet("test1", test1Img, {
      frameWidth: 48,
      frameHeight: 48,
    });
    this.load.spritesheet("test2", test2Img, {
      frameWidth: 96,
      frameHeight: 96,
    });
    this.load.spritesheet("bat", batImg, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("dog", dogImg, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("eyeball", eyeballImg, {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet("explosion", explosionImg, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("exp-up", expUpImg, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image("cat", catImg);

    this.load.spritesheet("beam", beamImg, {
      frameWidth: 75,
      frameHeight: 75,
    });

    this.load.bitmapFont("pixelFont", fontPng, fontXml);
    this.load.audio("audio_beam", fireOgg);
    this.load.audio("audio_explosion", popOgg);
    this.load.audio("audio_pickup", pickOgg);
    this.load.audio("audio_hurt", hurtOgg);
    this.load.audio("audio_gameover", gameoverOgg);
    this.load.audio("music", bgmOgg);
    this.load.audio("pause_in", pauseIn);
    this.load.audio("pause_out", pauseOut);
    this.load.audio("hit_mob", hitMobOgg);
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("mainScene");

    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "enemy_anim",
      frames: this.anims.generateFrameNumbers("enemy"),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "test1_anim",
      frames: this.anims.generateFrameNumbers("test1"),
      frameRate: 6,
      repeat: -1,
    });
    this.anims.create({
      key: "test2_anim",
      frames: this.anims.generateFrameNumbers("test2"),
      frameRate: 6,
      repeat: -1,
    });

    this.anims.create({
      key: "bat_anim",
      frames: this.anims.generateFrameNumbers("bat"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "dog_anim",
      frames: this.anims.generateFrameNumbers("dog"),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "eyeball_anim",
      frames: this.anims.generateFrameNumbers("eyeball"),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("exp-up", {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("exp-up", {
        start: 2,
        end: 3,
      }),
      frameRate: 20,
      repeat: -1,
    });
  }
}
