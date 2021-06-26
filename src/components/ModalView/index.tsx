import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import { Backgroud } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Backgroud>
              <View style={styles.bar} />
              {children}
            </Backgroud>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
