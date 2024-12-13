import React from 'react';
import { memo } from 'react';

interface SomeComponentProps {
  // Define aquí tus props
  props?: any;
}

const SomeComponent: React.FC<SomeComponentProps> = memo(({ props }) => {
  return (
    <div>
      {/* contenido del componente */}
    </div>
  );
});

export default SomeComponent; 