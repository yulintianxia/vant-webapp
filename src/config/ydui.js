/**
 * 引入ydui
 */

import Vue from 'vue'
import YDUI from 'vue-ydui';
import {Input} from 'vue-ydui/dist/lib.rem/input';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet';
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
import {Badge} from 'vue-ydui/dist/lib.rem/badge';
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll';
import {PullRefresh} from 'vue-ydui/dist/lib.rem/pullrefresh';
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';
import 'vue-ydui/dist/ydui.base.css';

Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
};

Vue.use(YDUI)
Vue.component(Input.name, Input);
Vue.component(ActionSheet.name, ActionSheet);
Vue.component(DateTime.name, DateTime);
Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);
Vue.component(Badge.name, Badge);
Vue.component(CitySelect.name, CitySelect);
Vue.component(InfiniteScroll.name, InfiniteScroll);
Vue.component(PullRefresh.name, PullRefresh);
Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);