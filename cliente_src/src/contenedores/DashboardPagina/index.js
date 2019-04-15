import React from 'react';
import plantilla from "../Plantilla/index";
import ConsultoriosDashboard from '../../componentes/zDashboard';

const DashboardPagina = () => {
  return (
    <div>
      <ConsultoriosDashboard/>
    </div>
  );
};

export default plantilla(DashboardPagina);
