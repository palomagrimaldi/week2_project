# SECURITY

## A07 Identification and Authentication Failures

This project implements authentication using Auth.js. Users must authenticate before accessing protected routes. Session management is secured using the AUTH_SECRET environment variable, reducing the risk of unauthorized access.

## A05 Security Misconfiguration

The application follows secure configuration practices by storing sensitive credentials in environment variables instead of hard-coding them into the source code. This reduces the risk of accidental exposure of secrets and authentication credentials.