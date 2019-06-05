import Hello from './Hello';
import { IEnthusiasmAction, decrementEnthusiasm, incrementEnthusiasm } from '../../store/hello/actions';
import { IStoreState } from '../../store/hello/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<IEnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(incrementEnthusiasm()),
    onDoubleIncrement: () => dispatch(incrementEnthusiasm(2)),
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onDoubleDecrement: () => dispatch(decrementEnthusiasm(2)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
