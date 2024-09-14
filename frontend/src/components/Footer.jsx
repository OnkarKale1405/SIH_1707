import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-footer-theme">
            <div className="container-xxl">
                <div className="d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                    <div className="text-body">
                        {/* ©
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        , made with ❤️ by
                        <a href="https://themeselection.com" target="_blank" rel="noopener noreferrer" className="footer-link">ThemeSelection</a>
                    </div>
                    <div className="d-flex flex-wrap">
                        <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank" rel="noopener noreferrer">License</a>
                        <a href="https://themeselection.com/" target="_blank" rel="noopener noreferrer" className="footer-link me-4">More Themes</a>
                        <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" rel="noopener noreferrer" className="footer-link me-4">Documentation</a>
                        <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" rel="noopener noreferrer" className="footer-link">Support</a>
                        Added links */}
                        <a href="/dashboards/admin" className="footer-link me-4">Admin</a>
                        <a href="/dashboards/employee" className="footer-link">Employee</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
