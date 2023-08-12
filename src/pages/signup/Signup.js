export default function Signup() {
  return (
    <div className="signup-wrapper">
        <div className="signup-container">
            <div className='signup-header'>
                <h3 className='signup-header-text'>Daftar</h3>
            </div>
            <div className='signup-body'>
                <div className='signup-input-container'>
                    <label className='signup-input-label'>Email</label>
                    <input className='signup-input' />
                </div>
                <div className='signup-input-container'>
                    <label className='signup-input-label'>Nama</label>
                    <input className='signup-input' />
                </div>
                <div className='signup-input-container'>
                    <label className='signup-input-label'>Kata Sandi</label>
                    <input className='signup-input' />
                </div>
                <div className='signup-input-container'>
                    <label className='signup-input-label'>Konfirmasi Kata Sandi</label>
                    <input className='signup-input' />
                </div>
                <div className="signup-btn-container">
                    <button className='signup-btn'>Daftar</button>
                </div>
            </div>
        </div>
    </div>
  );
}
