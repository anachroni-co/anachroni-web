import React from 'react';
import { Link } from 'react-router-dom';

interface ModelNavigationProps {
  currentModel: string;
  previousModel?: {
    name: string;
    path: string;
  };
  nextModel?: {
    name: string;
    path: string;
  };
}

const ModelNavigation: React.FC<ModelNavigationProps> = ({ currentModel, previousModel, nextModel }) => {
  return (
    <div className="flex items-center justify-between mt-16">
      {previousModel ? (
        <Link
          to={previousModel.path}
          className="flex items-center gap-2 px-6 py-3 transition-colors border rounded-lg border-white/20 hover:bg-white/10"
        >
          <span>←</span>
          <span>{previousModel.name}</span>
        </Link>
      ) : (
        <div />
      )}
      
      <Link
        to="/models"
        className="px-6 py-3 transition-colors border rounded-lg border-white/20 hover:bg-white/10"
      >
        Back to Models
      </Link>

      {nextModel ? (
        <Link
          to={nextModel.path}
          className="flex items-center gap-2 px-6 py-3 transition-colors border rounded-lg border-white/20 hover:bg-white/10"
        >
          <span>{nextModel.name}</span>
          <span>→</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ModelNavigation; 