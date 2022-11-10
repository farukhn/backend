import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
import './Blog.css'
const Blog = () => {
    useTitle('blog');
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 text-center">
                        <FaBookOpen className='w-25 book-icon'></FaBookOpen>
                        <h2 className='text-center'>BLOGS</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h4>Difference between SQL and NoSQL?</h4>
                        <p>
                            1.SQL databases are relational, NoSQL databases are non-relational.
                            2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                            3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                            5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h4>What is JWT, and how does it work?</h4>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                            JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                    </div>
                    <div className="col-lg-6">
                        <h4>What is the difference between javascript and NodeJS??</h4>
                        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                    <div className="col-lg-6">
                        <h4>How does NodeJS handle multiple requests at the same time?</h4>
                        <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;