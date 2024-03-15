import React, { PropsWithChildren } from 'react';
import { IonBackdrop, IonButton, IonModal, IonText } from '@ionic/react';
import PropTypes from "prop-types";

type BasicPopupProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
  closeOnBackdrop?: boolean;
}>

export type EmptyPopupProps = Readonly<{
  type?: null;
}> & BasicPopupProps & PropsWithChildren<{}>;


export type BasicPopupResultProps = Readonly<{
  message: string;
  confirmText: string;
  onConfirm: () => void;
}> & BasicPopupProps;


export type SuccessPopupProps = Readonly<{
  type: 'success'
}> & BasicPopupResultProps;


export type FailurePopupProps = Readonly<{
  type: 'failure'
  rejectText: string;
  onReject: () => void;
}> & BasicPopupResultProps;


export type PopupProps = EmptyPopupProps | SuccessPopupProps | FailurePopupProps;


export const Popup = (props: PopupProps) => {
  switch (props.type) {
    case "success":
      return React.createElement(SuccessPopup, props);
    case "failure":
      return React.createElement(FailurePopup, props);
    case undefined:
      return React.createElement(EmptyPopup, props);
    default: {
      return null;
    }
  }
}

const EmptyPopup = ({isOpen, onClose, children, closeOnBackdrop}: EmptyPopupProps) => {
  return (
    <IonModal className={"popup-container reset-ion-modal"} isOpen={isOpen} onDidDismiss={onClose} backdropDismiss={closeOnBackdrop}>
        {children}
    </IonModal>
  );
};
EmptyPopup.displayName = 'EmptyPopup';
EmptyPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  closeOnBackdrop: PropTypes.bool
};
EmptyPopup.defaultProps = {
  closeOnBackdrop: true
};


const SuccessPopup = ({ isOpen, onClose, onConfirm, confirmText, message, closeOnBackdrop }: SuccessPopupProps) => {
  return (
    <EmptyPopup isOpen={isOpen} onClose={onClose} closeOnBackdrop={closeOnBackdrop}>
      <IonText>{message}</IonText>
      <IonButton onClick={onConfirm} expand="block">{confirmText}</IonButton>
    </EmptyPopup>
  );
};
SuccessPopup.displayName = 'SuccessPopup';
SuccessPopup.propTypes = {
  ...EmptyPopup.propTypes,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
SuccessPopup.defaultProps = {
  closeOnBackdrop: false
};

const FailurePopup = ({ isOpen, onClose, onReject, onConfirm, confirmText, rejectText, message, closeOnBackdrop }: FailurePopupProps) => {
  return (
    <EmptyPopup  isOpen={isOpen} onClose={onClose} closeOnBackdrop={closeOnBackdrop}>
      <IonText color="danger">{message}</IonText>
      <IonButton onClick={onConfirm} expand="block">{confirmText}</IonButton>
      <IonButton onClick={onReject} expand="block">{rejectText}</IonButton>
    </EmptyPopup>
  );
};
FailurePopup.displayName = 'FailurePopup';
FailurePopup.propTypes = {
  ...EmptyPopup.propTypes,
  onReject: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  rejectText: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
FailurePopup.defaultProps = {
  closeOnBackdrop: false
};
