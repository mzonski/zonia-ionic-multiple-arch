import React, { PropsWithChildren } from 'react';
import { IonButton } from "@ionic/react";




const Container = ({children}: PropsWithChildren<{}>) => {
  return (
    <div className="card-container">
      {children}
    </div>
  );
};

const Title = ({children}: PropsWithChildren<{}>) => {
  return (
    <div className="card-container">
      <div className="card-title">Getting started with platform</div>
      <div className="card-item">Create an account</div>
      <div className="card-item">Verify my account</div>
      <div className="card-item">Add a payment method</div>
      <a href="/articles" className="card-link">See more articles</a>
      <div className="card-actions"><IonButton>OK</IonButton><IonButton>Cancel</IonButton></div>
    </div>
  );
};

const Item = ({children}: PropsWithChildren<{}>) => {
  return (
    <div className="card-container">
      <div className="card-title">Getting started with platform</div>
      <div className="card-item">Create an account</div>
      <div className="card-item">Verify my account</div>
      <div className="card-item">Add a payment method</div>
      <a href="/articles" className="card-link">See more articles</a>
      <div className="card-actions"><IonButton>OK</IonButton><IonButton>Cancel</IonButton></div>
    </div>
  );
};

const Link = ({children}: PropsWithChildren<{}>) => {
  return (
    <div className="card-container">
      <div className="card-title">Getting started with platform</div>
      <div className="card-item">Create an account</div>
      <div className="card-item">Verify my account</div>
      <div className="card-item">Add a payment method</div>
      <a href="/articles" className="card-link">See more articles</a>
      <div className="card-actions"><IonButton>OK</IonButton><IonButton>Cancel</IonButton></div>
    </div>
  );
};

const Actions = ({children}: PropsWithChildren<{}>) => {
  return (
    <div className="card-container">
      <div className="card-title">Getting started with platform</div>
      <div className="card-item">Create an account</div>
      <div className="card-item">Verify my account</div>
      <div className="card-item">Add a payment method</div>
      <a href="/articles" className="card-link">See more articles</a>
      <div className="card-actions"><IonButton>OK</IonButton><IonButton>Cancel</IonButton></div>
    </div>
  );
};

const Card = {
  Container,
  Title,
  Item,
  Link,
  Actions
};

export default CardComponent;
