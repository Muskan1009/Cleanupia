import React from 'react'

const Privacy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">Effective Date: September 16, 2024</p>

            <p className="mb-6">
                Cleanupia Cleaning Services is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Information We Collect:</h2>
            <ul className="list-disc pl-6 mb-6">
                <li>Personal information such as name, email, phone number, and payment details.</li>
                <li>Usage data including IP address and browser type.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">How We Use Information:</h2>
            <ul className="list-disc pl-6 mb-6">
                <li>To provide cleaning services and communicate with you.</li>
                <li>To process payments and comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Data Protection:</h2>
            <p className="mb-6">
                We implement security measures to protect your data, though no method of transmission is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us:</h2>
            <ul className="mb-6">
                <li>Phone: <a href="tel:+18885819885" className="text-blue-600 hover:underline">888-581-9885</a></li>
                <li>Email: <a href="mailto:info@cleanupia.com" className="text-blue-600 hover:underline">info@cleanupia.com</a></li>
                <li>Address: Five Greentree Centre, 525 Route 73N, Suite 104, Marlton, NJ 08053</li>
            </ul>
        </div>
    );
}

export default Privacy