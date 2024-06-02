FROM python:3.11-bookworm as builder

WORKDIR /opt/app
COPY requirements.txt /opt/app/
RUN pip install --upgrade pip && pip install -r requirements.txt

FROM python:3.11-slim-bookworm as runner

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN groupadd -r appuser && useradd -r -g appuser appuser
USER appuser
WORKDIR /home/appuser

COPY --from=builder /usr/local/bin /usr/local/bin
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --chown=appuser:appuser . /home/appuser