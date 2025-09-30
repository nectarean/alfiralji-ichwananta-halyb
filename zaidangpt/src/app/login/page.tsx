import React from 'react';
import Ujian from './Ujian/ujian_544241082';

export default function page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
      
    <Ujian />

      <div style={{ display: 'flex', gap: 30, marginBottom: 30 }}>
        <div style={{ background: 'purple', color: 'white', borderRadius: 6, width: 230, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
        </div>
        <div style={{ background: 'pink', color: 'white', borderRadius: 6, width: 230, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
        </div>
      </div>

      <div style={{ display: 'flex', gap: 30 }}>
        <div style={{ background: 'green', color: 'white', borderRadius: 6, width: 230, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
        </div>
        <div style={{ background: 'red', color: 'white', borderRadius: 6, width: 230, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
        </div>
        <div style={{ background: 'black', color: 'white', borderRadius: 6, width: 230, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
        </div>
      </div>
    </div>
  )
}