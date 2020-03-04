/*
    The purpose of this file is to provide a single import for projects wishing
    to use the components of the library.

    One day it may be sensible to break this up into distinct sections so that
    projects can import only sub-sections of the library. Why? So that they do
    not import components that they do not use which add to the bundle size.
*/
/*
    Normally I'd hate to have imports through the file, however it feels better
    to keep imports local to where they are used in this case.
*/
import './styles/main.scss';
import Vue from 'vue';

const labKitPrefix = 'lk';

/*
    Formatters
*/
import FormatNumber from './components/FormatNumber';

Vue.component(`${labKitPrefix}-format-number`, FormatNumber);

/*
    Inputs
*/

import SearchSelect from './components/inputs/SearchSelect';
import Button from './components/inputs/Button';
import Checkbox from './components/inputs/Checkbox';
import CheckboxButtons from './components/inputs/CheckboxButtons';
import DatePicker from './components/inputs/DatePicker';
import FileUpload from './components/inputs/FileUpload';
import Input from './components/inputs/Input';
import InputLabel from './components/inputs/utils/InputLabel';
import MultiInput from './components/inputs/MultiInput';
import DateTimePicker from './components/inputs/DateTimePicker';
import Switch from './components/inputs/Switch';
import Radio from './components/inputs/Radio';
import Rating from './components/inputs/Rating';
import RadioTabs from './components/inputs/RadioTabs';
import Select from './components/inputs/Select';
import Slider from './components/inputs/Slider';
import Textarea from './components/inputs/Textarea';
import TreePicker from './components/tree-picker/Wrapper';
import Card from './components/card/Card';
import CardRow from './components/card/CardRow';
import CardKeyValue from './components/card/CardKeyValue';
import CardSubsection from './components/card/CardSubsection';

Vue.component(`${labKitPrefix}-search-select`, SearchSelect);
Vue.component(`${labKitPrefix}-button`, Button);
Vue.component(`${labKitPrefix}-card`, Card);
Vue.component(`${labKitPrefix}-card-key-value`, CardKeyValue);
Vue.component(`${labKitPrefix}-card-row`, CardRow);
Vue.component(`${labKitPrefix}-card-subsection`, CardSubsection);
Vue.component(`${labKitPrefix}-checkbox`, Checkbox);
Vue.component(`${labKitPrefix}-checkbox-buttons`, CheckboxButtons);
Vue.component(`${labKitPrefix}-date-picker`, DatePicker);
Vue.component(`${labKitPrefix}-file-upload`, FileUpload);
Vue.component(`${labKitPrefix}-input`, Input);
Vue.component(`${labKitPrefix}-input-label`, InputLabel);
Vue.component(`${labKitPrefix}-date-time-picker`, DateTimePicker);
Vue.component(`${labKitPrefix}-multi-input`, MultiInput);
Vue.component(`${labKitPrefix}-new-input`, MultiInput);
Vue.component(`${labKitPrefix}-switch`, Switch);
Vue.component(`${labKitPrefix}-radio`, Radio);
Vue.component(`${labKitPrefix}-rating`, Rating);
Vue.component(`${labKitPrefix}-radio-tabs`, RadioTabs);
Vue.component(`${labKitPrefix}-select`, Select);
Vue.component(`${labKitPrefix}-slider`, Slider);
Vue.component(`${labKitPrefix}-textarea`, Textarea);
Vue.component(`${labKitPrefix}-tree-picker`, TreePicker);

/*
    Layout
*/
import Alert from './components/Alert';
import Column from './components/grid/Column';
import Container from './components/grid/Container';
import Content from './components/Content';
import Divider from './components/Divider';
import Glass from './components/Glass';
import GlassPortal from './components/GlassPortal';
import Heading from './components/Heading';
import Modal from './components/Modal';
import Padder from './components/Padder';
import Row from './components/grid/Row';
import Tree from './components/Tree';
import Wrapper from './components/Wrapper';

Vue.component(`${labKitPrefix}-alert`, Alert);
Vue.component(`${labKitPrefix}-column`, Column);
Vue.component(`${labKitPrefix}-container`, Container);
Vue.component(`${labKitPrefix}-content`, Content);
Vue.component(`${labKitPrefix}-divider`, Divider);
Vue.component(`${labKitPrefix}-glass`, Glass);
Vue.component(`${labKitPrefix}-glass-portal`, GlassPortal);
Vue.component(`${labKitPrefix}-heading`, Heading);
Vue.component(`${labKitPrefix}-modal`, Modal);
Vue.component(`${labKitPrefix}-padder`, Padder);
Vue.component(`${labKitPrefix}-row`, Row);
Vue.component(`${labKitPrefix}-tree`, Tree);
Vue.component(`${labKitPrefix}-wrapper`, Wrapper);

/*
    Misc.
*/
import AppIcon from './components/appIcons/AppIcon';
import Badge from './components/Badge';
import Icon from './components/icon/Icon';
import LoadingGlass from './components/LoadingGlass';
import LoadingSpinner from './components/LoadingSpinner';
import Notification from './components/notifications/Container';
import Popper from './components/Popper';
import Table from './components/Table';
import Tooltip from './components/Tooltip';

Vue.component(`${labKitPrefix}-app-icon`, AppIcon);
Vue.component(`${labKitPrefix}-badge`, Badge);
Vue.component(`${labKitPrefix}-icon`, Icon);
Vue.component(`${labKitPrefix}-loading-glass`, LoadingGlass);
Vue.component(`${labKitPrefix}-loading-spinner`, LoadingSpinner);
Vue.component(`${labKitPrefix}-notification`, Notification);
Vue.component(`${labKitPrefix}-popper`, Popper);
Vue.component(`${labKitPrefix}-table`, Table);
Vue.component(`${labKitPrefix}-tooltip`, Tooltip);

/*
    Navigation
*/
import Breadcrumb from './components/Breadcrumb';
import DropdownButton from './components/DropdownButton';
import DropdownMenu from './components/DropdownMenu';
import NavigationTabs from './components/NavigationTabs';
import NavigationTree from './components/NavigationTree';
import PageNavigation from './components/PageNavigation';

Vue.component(`${labKitPrefix}-breadcrumb`, Breadcrumb);
Vue.component(`${labKitPrefix}-dropdown-button`, DropdownButton);
Vue.component(`${labKitPrefix}-dropdown-menu`, DropdownMenu);
Vue.component(`${labKitPrefix}-navigation-tabs`, NavigationTabs);
Vue.component(`${labKitPrefix}-navigation-tree`, NavigationTree);
Vue.component(`${labKitPrefix}-page-navigation`, PageNavigation);

/*
    Panel
*/
import Panel from './components/panel/Panel';
import PanelBody from './components/panel/PanelBody';
import PanelFooter from './components/panel/PanelFooter';
import PanelHeader from './components/panel/PanelHeader';

Vue.component(`${labKitPrefix}-panel`, Panel);
Vue.component(`${labKitPrefix}-panel-body`, PanelBody);
Vue.component(`${labKitPrefix}-panel-footer`, PanelFooter);
Vue.component(`${labKitPrefix}-panel-header`, PanelHeader);

/*
    3rd Party
*/
import {Datetime as VueDatetime} from 'vue-datetime';
Vue.component('vue-datetime', VueDatetime);
