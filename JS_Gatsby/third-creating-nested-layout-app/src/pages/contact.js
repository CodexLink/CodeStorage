import React from 'react';
import Layout from "../components/layout"; // ! Declare Our First Layout Component

// ! Again, literally JSX. Using JSX Extension is optional.

// ! Encapsulate Our DIV with our Component Named 'Layout'.
export default () => (
    <Layout>
        <div>
            <h1>I'd love to talk! Email me at the address below</h1>
            <p>
                <a href="mailto:me@example.com">me@example.com</a>
            </p>
        </div>
    </Layout>
)
