"use client";

import { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const WalletTracker = () => {
  // Sample data - replace with real API calls to wallet
  const [walletData, setWalletData] = useState([
    { name: "USDC", value: 4500, color: "#2775CA" },
    { name: "BABY", value: 12500, color: "#FF6B6B" },
    { name: "SOL", value: 3200, color: "#00FFA3" },
  ]);

  const [totalValue, setTotalValue] = useState(0);

  // Calculate total value whenever walletData changes
  useEffect(() => {
    const total = walletData.reduce((sum, item) => sum + item.value, 0);
    setTotalValue(total);
  }, [walletData]);

  // Mock function to simulate fetching wallet data
  const fetchWalletData = async () => {
    try {
      const response = await fetch("https://api.solana.com/wallet/balance/...");
      const data = await response.json();
      setWalletData([
        { name: "USDC", value: data.usdcBalance, color: "#2775CA" },
        { name: "BABY", value: data.babyBalance, color: "#FF6B6B" },
        { name: "SOL", value: data.solBalance, color: "#00FFA3" },
      ]);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
  };

  // Refresh data every 60 seconds
  //   useEffect(() => {
  //     fetchWalletData();
  //     const interval = setInterval(fetchWalletData, 60000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="bg-gray-50 md:py-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
          Community Wallet Tracker
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center border border-gray-200 rounded-lg md:p-6 p-4 shadow-md bg-white">
          {/* Pie Chart Visualization */}
          <div className="w-full md:w-1/2 h-64 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={walletData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(1)}%`
                  }
                >
                  {walletData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [
                    `$${value.toLocaleString()}`,
                    "Amount",
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Wallet Summary */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                Total Raised
              </h3>
              <p className="text-4xl font-bold text-blue-700">
                ${totalValue.toLocaleString()}
              </p>
            </div>

            <div className="space-y-4">
              {walletData.map((token) => (
                <div
                  key={token.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: token.color }}
                    ></div>
                    <span className="font-medium">{token.name}</span>
                  </div>
                  <span className="font-semibold">
                    ${token.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={fetchWalletData}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Refresh Data
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Data updates every 60 seconds. Wallet address: 0x...1234</p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View on Solana Explorer
          </a>
        </div>
      </div>
    </div>
  );
};

export default WalletTracker;
