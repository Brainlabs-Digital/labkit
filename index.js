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
import '@/labkit/styles/main.scss';
import Vue from 'vue';

const labKitPrefix = 'lk';

/*
    Formatters
*/
import FormatNumber from '@/labkit/components/FormatNumber';

Vue.component(`${labKitPrefix}-format-number`, FormatNumber);

/*
    Inputs
*/

import SearchSelect from '@/labkit/components/inputs/SearchSelect';
import Button from '@/labkit/components/inputs/Button';
import Checkbox from '@/labkit/components/inputs/Checkbox';
import CheckboxButtons from '@/labkit/components/inputs/CheckboxButtons';
import DatePicker from '@/labkit/components/inputs/DatePicker';
import FileUpload from '@/labkit/components/inputs/FileUpload';
import Input from '@/labkit/components/inputs/Input';
import InputLabel from '@/labkit/components/inputs/utils/InputLabel';
import MultiInput from '@/labkit/components/inputs/MultiInput';
import DateTimePicker from '@/labkit/components/inputs/DateTimePicker';
import Switch from '@/labkit/components/inputs/Switch';
import Radio from '@/labkit/components/inputs/Radio';
import RadioTabs from '@/labkit/components/inputs/RadioTabs';
import Select from '@/labkit/components/inputs/Select';
import Textarea from '@/labkit/components/inputs/Textarea';
import TreePicker from '@/labkit/components/tree-picker/Wrapper';

import Card from '@/labkit/components/card/Card';
import CardRow from '@/labkit/components/card/CardRow';
import CardKeyValue from '@/labkit/components/card/CardKeyValue';
import CardSubsection from '@/labkit/components/card/CardSubsection';

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
Vue.component(`${labKitPrefix}-radio-tabs`, RadioTabs);
Vue.component(`${labKitPrefix}-select`, Select);
Vue.component(`${labKitPrefix}-textarea`, Textarea);
Vue.component(`${labKitPrefix}-tree-picker`, TreePicker);

/*
    Layout
*/
import Alert from '@/labkit/components/Alert';
import Column from '@/labkit/components/grid/Column';
import Container from '@/labkit/components/grid/Container';
import Content from '@/labkit/components/Content';
import Divider from '@/labkit/components/Divider';
import Glass from '@/labkit/components/Glass';
import GlassPortal from '@/labkit/components/GlassPortal';
import Heading from '@/labkit/components/Heading';
import Modal from '@/labkit/components/Modal';
import Padder from '@/labkit/components/Padder';
import Row from '@/labkit/components/grid/Row';
import Tree from '@/labkit/components/Tree';
import Wrapper from '@/labkit/components/Wrapper';

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
import AppIcon from '@/labkit/components/appIcons/AppIcon';
import Badge from '@/labkit/components/Badge';
import Icon from '@/labkit/components/icon/Icon';
import LoadingGlass from '@/labkit/components/LoadingGlass';
import LoadingSpinner from '@/labkit/components/LoadingSpinner';
import Notification from '@/labkit/components/notifications/Container';
import Popper from '@/labkit/components/Popper';
import Table from '@/labkit/components/Table';
import Tooltip from '@/labkit/components/Tooltip';

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
import Breadcrumb from '@/labkit/components/Breadcrumb';
import DropdownButton from '@/labkit/components/DropdownButton';
import DropdownMenu from '@/labkit/components/DropdownMenu';
import NavigationTabs from '@/labkit/components/NavigationTabs';
import NavigationTree from '@/labkit/components/NavigationTree';
import PageNavigation from '@/labkit/components/PageNavigation';

Vue.component(`${labKitPrefix}-breadcrumb`, Breadcrumb);
Vue.component(`${labKitPrefix}-dropdown-button`, DropdownButton);
Vue.component(`${labKitPrefix}-dropdown-menu`, DropdownMenu);
Vue.component(`${labKitPrefix}-navigation-tabs`, NavigationTabs);
Vue.component(`${labKitPrefix}-navigation-tree`, NavigationTree);
Vue.component(`${labKitPrefix}-page-navigation`, PageNavigation);

/*
    Panel
*/
import Panel from '@/labkit/components/panel/Panel';
import PanelBody from '@/labkit/components/panel/PanelBody';
import PanelFooter from '@/labkit/components/panel/PanelFooter';
import PanelHeader from '@/labkit/components/panel/PanelHeader';

Vue.component(`${labKitPrefix}-panel`, Panel);
Vue.component(`${labKitPrefix}-panel-body`, PanelBody);
Vue.component(`${labKitPrefix}-panel-footer`, PanelFooter);
Vue.component(`${labKitPrefix}-panel-header`, PanelHeader);

/*
    3rd Party
*/
import {Datetime as VueDatetime} from 'vue-datetime';
Vue.component('vue-datetime', VueDatetime);
