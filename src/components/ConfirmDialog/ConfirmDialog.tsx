import React from 'react';
import { Modal } from 'react-native';
import {
    Actions,
    Backdrop,
    DangerButton,
    DangerLabel,
    Description,
    OutlinedButton,
    OutlinedLabel,
    Sheet,
    Title,
} from './ConfirmDialog.styles';

type Props = {
  visible: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({ visible, title, description, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel }: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onCancel}>
      <Backdrop onPress={onCancel}>
        <Sheet>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}
          <Actions>
            <OutlinedButton onPress={onCancel} accessibilityRole="button">
              <OutlinedLabel>{cancelText}</OutlinedLabel>
            </OutlinedButton>
            <DangerButton onPress={onConfirm} accessibilityRole="button">
              <DangerLabel>{confirmText}</DangerLabel>
            </DangerButton>
          </Actions>
        </Sheet>
      </Backdrop>
    </Modal>
  );
}

export default ConfirmDialog;


