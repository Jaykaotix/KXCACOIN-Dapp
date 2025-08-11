import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  // Connect MetaMask
  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error("MetaMask connection error:", err);
      }
    } else {
      alert("MetaMask not detected! Please install it.");
    }
  }

  return (
    <div className="app-container">
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="app-title"
      >
        KaotixcaCoin (KXCA)
      </motion.h1>

      {/* Wallet Connection */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="wallet-button"
        onClick={connectWallet}
      >
        {walletAddress
          ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`
          : "Connect MetaMask"}
      </motion.button>

      {/* Token Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="token-info"
      >
        <p><strong>Token Symbol:</strong> KXCA</p>
        <p><strong>Network:</strong> Ethereum (Sepolia / Mainnet)</p>
        <p><strong>Total Supply:</strong> Coming Soon...</p>
      </motion.div>

      {/* Music Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="music-links"
      >
        <h2>🎵 Listen to Jay Kaotixca</h2>
        <ul>
          <li><a href="https://www.bandlab.com/jaykaotixcamuzik" target="_blank">BandLab</a></li>
          <li><a href="https://music.apple.com/us/artist/jay-kaotixca/1511542847" target="_blank">Apple Music</a></li>
          <li><a href="https://open.spotify.com/artist/4xv3OLntL4AOKcsCacfJoZ?si=ebL40YScQPipGhaeDcldgA" target="_blank">Spotify</a></li>
        </ul>
      </motion.div>

      {/* Artist Bio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bio"
      >
        <h3>About Jay Kaotixca</h3>
        <p>
          Jay Kaotixca is an independent recording artist blending emo rap, trap, and hip-hop with raw emotion.
          Creator of KaotixcaCoin (KXCA), merging music and crypto for the future of fan-powered artistry.
        </p>
      </motion.div>
    </div>
  );
}

export default App;