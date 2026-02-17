import React from 'react'
import './App.css'

// Khai báo dữ liệu ở ngoài function để không bị khởi tạo lại mỗi khi component render
const castData = [
  { id: 1, name: 'Backend Project' },
  { id: 2, name: 'Frontend Project' },
  { id: 3, name: 'AI Project' },
  { id: 4, name: 'Sale Project' }
];

// Nếu bạn dùng castData nội bộ, bạn không cần nhận prop 'cast' từ ngoài vào nữa
function App({ onChoice }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <details role="list">
              <summary aria-haspopup="listbox" role="link">Menu Projects</summary>
              <ul role="listbox"> 
                {/* Dùng trực tiếp castData đã khai báo ở trên */}
                {castData.map(member => (
                  <li key={member.id}>
                    <a 
                      onClick={() => { onChoice(member) }} 
                      data-tooltip={member.name}
                      style={{ cursor: 'pointer' }}
                    >
                      {member.name} 
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App