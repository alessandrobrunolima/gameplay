import React from "react";

import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Button as ButtonComponent } from "../Button";
import { RectButton } from "react-native-gesture-handler";

import { Backgroud } from "../Background";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";

type Props = ModalProps & {
  closeSignUpModal: () => void;
};

export function ModalSignUp({ closeSignUpModal, ...rest }: Props) {
  const { signOut } = useAuth();

  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={closeSignUpModal}
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.viewCenter}>
            <Text style={styles.title1}>Deseja sair do </Text>
            <Text style={styles.title2}>Game</Text>
            <Text style={styles.title3}>Play</Text>
            <Text style={styles.title2}>?</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.buttonNao]}
              onPress={closeSignUpModal}
              activeOpacity={0.8}
            >
              <Text style={styles.titleButton}>Não</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonSim]}
              onPress={signOut}
              activeOpacity={0.8}
            >
              <Text style={styles.titleButton}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
