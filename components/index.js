import Vue from 'vue'
import Login from '../components/Login'
import User from './card/User'
import Upload from "./Upload";
import Avatar from "./Avatar";
import LoginBar from "./LoginBar";
import ApplicationSelect from "./ApplicationSelect";
import Data from "./field/Data";
import ContentEditable from "./field/ContentEditable";
import Feature from "./card/Feature";
import FeatureList from "./list/Feature";
import FeatureForm from "./form/Feature"
import CommentForm from "./form/Comment";
import CommentCard from "./card/Comment";

Vue.component('Avatar', Avatar);
Vue.component('Upload', Upload);
Vue.component('Login', Login);
Vue.component('user-card', User);
Vue.component('login-bar', LoginBar);
Vue.component('app-selector', ApplicationSelect);
Vue.component('data-generic', Data);
Vue.component('ce', ContentEditable);
Vue.component('feature', Feature);
Vue.component('feature-list', FeatureList);
Vue.component('feature-form', FeatureForm);
Vue.component('comment-card', CommentCard);
Vue.component('comment-form', CommentForm);
