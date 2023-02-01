import type { StackHeaderProps } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';

export const CustomAppBar: React.FC<StackHeaderProps> = ({
  navigation,
  back,
  options,
}) => {
  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={options?.title ?? 'Screen'} />
    </Appbar.Header>
  );
};
