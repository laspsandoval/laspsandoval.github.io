---
layout: page
title: Architecture
---

# I-ALiRT Real-Time Processing Architecture

![I-ALiRT Architecture](/assets/aws-ialirt-architecture.png)

## Overview

I-ALiRT (Interstellar Mapping and Acceleration Probe - Active Link for Real-Time) is a cloud-based system designed to ingest, process, and distribute real-time space weather data from multiple global ground stations.

The system is built to support continuous telemetry streams, low-latency processing, and scalable data access for downstream users.

## Key Components

### Ground Station Ingest
- Multiple international stations (Kiel, UKSA, DSN)
- Continuous ~4.5 GHz broadcast from IMAP spacecraft
- Frame ingest via TCP through a Network Load Balancer

### Real-Time Processing (ECS)
- AWS ECS (EC2-backed Auto Scaling Group)
- Handles packet ingestion and decoding
- Elastic IPs used for stable ground station connectivity

### Data Storage & Events
- Amazon S3 stores packet data and daily CDFs
- Event-driven processing pipeline triggers downstream workflows

### Algorithm Processing
- AWS Lambda processes packets
- Retrieves SPICE kernels and calibration files (via EFS)
- Computes spacecraft orientation and runs instrument algorithms

### Data Access Layer
- Amazon DynamoDB stores processed metadata
- API Gateway + Lambda enables query and download of data products

## Highlights

- Real-time ingestion of spacecraft telemetry
- Event-driven architecture for scalable processing
- Integration of scientific computation (SPICE) within cloud infrastructure
- Global ground station coordination
