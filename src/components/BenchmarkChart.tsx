import React from 'react';
import { motion } from 'framer-motion';

interface BenchmarkChartProps {
  title: string;
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  maxValue: number;
}

const BenchmarkChart: React.FC<BenchmarkChartProps> = ({ title, data, maxValue }) => {
  return (
    <div className="relative p-6 overflow-hidden bg-black/90 rounded-xl backdrop-blur-sm">
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      
      {/* Patrón de circuitos */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM70 10h10v10H70zM90 10h10v10H90zM20 20h10v10H20zM40 20h10v10H40zM60 20h10v10H60zM80 20h10v10H80zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM70 30h10v10H70zM90 30h10v10H90zM20 40h10v10H20zM40 40h10v10H40zM60 40h10v10H60zM80 40h10v10H80zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50zM70 50h10v10H70zM90 50h10v10H90zM20 60h10v10H20zM40 60h10v10H40zM60 60h10v10H60zM80 60h10v10H80zM10 70h10v10H10zM30 70h10v10H30zM50 70h10v10H50zM70 70h10v10H70zM90 70h10v10H90zM20 80h10v10H20zM40 80h10v10H40zM60 80h10v10H60zM80 80h10v10H80z' fill='%2300ff00' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10">
        <h3 className="mb-4 text-xl font-light">{title}</h3>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-300">{item.label}</span>
                <span className="text-sm text-gray-300">{item.value}x</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`h-2 rounded-full ${item.color}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenchmarkChart; 