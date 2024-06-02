FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir /example-app
WORKDIR /example-app
ADD requirements.txt /example-app/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ADD . /example-app/

RUN chmod 755 entrypoint.sh