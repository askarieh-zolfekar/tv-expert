import IcFile from "../assets/img/ic-file.svg";
import IcMicrophoneOrange from "../assets/img/ic-microphone-orange.svg";
import IcCamera from "../assets/img/ic-camera-white.svg";
import IcOrangeCamera from "../assets/img/ic-orange-camera.svg";

export const FILE_TYPES = {
    word: {icon: IcFile, class:'ic-file', label: 'word'},
    pdf: {icon: IcFile, class:'ic-file', label: 'pdf'},
    voice: {icon: IcMicrophoneOrange, class:'ic-voice', label: 'audio'},
    video: {icon: IcCamera, class:'ic-video', label: ''},
    course: {icon: IcOrangeCamera, class:'ic-course', label: ''},
};

export const NAV_BAR_TABS = [
    {title: 'نبذة عن هند', link:'/overview'},
    {title: 'متجر', link:'/store'},
    {title: 'برودكاست', link:'/broadcast'},
    {title: 'كورسات', link:'/courses'},
    {title: 'حجز عيادة (20 دينار كويتي)', link:'/book' },
];
