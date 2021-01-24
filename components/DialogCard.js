import * as React from "react";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";

// Info Dialog component
const DialogCard = ({ visible, hideDialog }) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Pictour</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>
                        Pictour is an image browsing react native app with the
                        utilization of Pixerbay API. Created by @aungmcs
                    </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default DialogCard;
