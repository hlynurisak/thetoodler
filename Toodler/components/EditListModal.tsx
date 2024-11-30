import React from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ColorPicker, { Preview, HueSlider } from 'reanimated-color-picker';


export default function EditListModal({
  visible,
  onClose,
  onEditList,
  listName,
  setListName,
  listColor,
  setListColor,
  onDelete,
}: {
  visible: boolean;
  onClose: () => void;
  onEditList: () => void;
  listName: string;
  setListName: (text: string) => void;
  listColor: string;
  setListColor: (text: string) => void;
  onDelete: () => void;
}) {
  const updateColor = (colors: { hex: string }) => {
    setListColor(colors.hex);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.modalText}>Edit List</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder={listName}
            value={listName}
            onChangeText={setListName}
          />
          <Text style={styles.colorPickerLabel}>Pick a Color:</Text>
          <ColorPicker style={{ width: '100%' }} value={listColor} onComplete={updateColor}>
            <Preview 
              style={{ width: '100%', height: 40, marginBottom: 10 }}
              hideInitialColor={true}
            />
            <HueSlider />
          </ColorPicker>
          <Button title="Save Changes" onPress={onEditList} />
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButtonText: {
    color: 'grey',
    fontSize: 18,
  },
  deleteButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  deleteButtonText: {
    marginTop: 5,
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  modalButtonText: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
    fontSize: 14,
  },
  colorPickerLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
});
