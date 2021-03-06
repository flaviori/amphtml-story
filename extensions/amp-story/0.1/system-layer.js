/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {EventType, dispatch} from './events';
import {dev} from '../../../src/log';
import {scale, setStyles} from '../../../src/style';
import {Services} from '../../../src/services';


// TODO(alanorozco): Use a precompiled template for performance
const TEMPLATE =
    `<div class="i-amp-story-progress">
      <div class="i-amp-story-progress-bar"></div>
      <div class="i-amp-story-progress-value"></div>
    </div>
    <div class="i-amp-story-ui-right">
      <div role="button" class="i-amp-story-unmute-audio-control i-amp-story-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
      <div role="button" class="i-amp-story-mute-audio-control i-amp-story-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
      <div role="button" class="i-amp-story-exit-fullscreen i-amp-story-button" hidden>
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
        </svg>
      </div>
      <div div role="button" class="i-amp-story-bookend-close i-amp-story-button" hidden>
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div role="button">
    </nav>`;


/**
 * @param {!Element} el
 * @param {boolean} isHidden
 */
function toggleHiddenAttribute(el, isHidden) {
  if (isHidden) {
    el.setAttribute('hidden', 'hidden');
  } else {
    el.removeAttribute('hidden');
  }
}


/**
 * System Layer (i.e. UI Chrome) for <amp-story>.
 */
export class SystemLayer {
  /**
   * @param {!Window} win
   */
  constructor(win) {
    /** @private {!Window} */
    this.win_ = win;

    /** @private {boolean} */
    this.isBuilt_ = false;

    /** @private {?Element} */
    this.root_ = null;

    /** @private {boolean} */
    this.inFullScreen_ = false;

    /** @private {?Element} */
    this.exitFullScreenBtn_ = null;

    /** @private {?Element} */
    this.closeBookendBtn_ = null;

    /** @private {?Element} */
    this.muteAudioBtn_ = null;

    /** @private {?Element} */
    this.unmuteAudioBtn_ = null;

    /** @private {?Element} */
    this.progressEl_ = null;
  }

  /**
   * @return {!Element}
   */
  build() {
    if (this.isBuilt_) {
      return this.getRoot();
    }

    this.isBuilt_ = true;

    this.root_ = this.win_.document.createElement('aside');
    this.root_.classList.add('i-amp-story-system-layer');
    this.root_./*OK*/innerHTML = TEMPLATE;

    this.exitFullScreenBtn_ =
        this.root_.querySelector('.i-amp-story-exit-fullscreen');

    this.closeBookendBtn_ =
        this.root_.querySelector('.i-amp-story-bookend-close');

    this.muteAudioBtn_ =
        this.root_.querySelector('.i-amp-story-mute-audio-control');

    this.unmuteAudioBtn_ =
        this.root_.querySelector('.i-amp-story-unmute-audio-control');

    this.progressEl_ = this.root_.querySelector('.i-amp-story-progress-value');

    this.addEventHandlers_();

    return this.getRoot();
  }

  /**
   * @private
   */
  addEventHandlers_() {
    // TODO(alanorozco): Listen to tap event properly (i.e. fastclick)
    this.exitFullScreenBtn_.addEventListener(
        'click', e => this.onExitFullScreenClick_(e));

    this.closeBookendBtn_.addEventListener(
        'click', e => this.onCloseBookendClick_(e));

    this.muteAudioBtn_.addEventListener(
        'click', e => this.onMuteAudioClick_(e));

    this.unmuteAudioBtn_.addEventListener(
        'click', e => this.onUnmuteAudioClick_(e));
  }

  /**
   * @return {!../../../src/service/vsync-impl.Vsync}
   * @private
   */
  getVsync_() {
    return Services.vsyncFor(this.win_);
  }

  /**
   * @return {!Element}
   */
  getRoot() {
    return dev().assertElement(this.root_);
  }

  /**
   * @param {boolean} inFullScreen
   */
  setInFullScreen(inFullScreen) {
    this.inFullScreen_ = inFullScreen;

    this.toggleExitFullScreenBtn_(inFullScreen);
  }

  /**
   * @param {boolean} isEnabled
   * @private
   */
  toggleExitFullScreenBtn_(isEnabled) {
    this.getVsync_().mutate(() => {
      toggleHiddenAttribute(
          dev().assertElement(this.exitFullScreenBtn_),
          /* opt_isHidden */ !isEnabled);
    });
  }

  /**
   * @param {boolean} isEnabled
   */
  toggleCloseBookendButton(isEnabled) {
    this.getVsync_().mutate(() => {
      toggleHiddenAttribute(
          dev().assertElement(this.closeBookendBtn_),
          /* opt_isHidden */ !isEnabled);
    });
  }

  /**
   * @param {!Event} e
   * @private
   */
  onExitFullScreenClick_(e) {
    this.dispatch_(EventType.EXIT_FULLSCREEN, e);
  }

  /**
   * @param {!Event} e
   * @private
   */
  onCloseBookendClick_(e) {
    this.dispatch_(EventType.CLOSE_BOOKEND, e);
  }

  /**
   * @param {!Event} e
   * @private
   */
  onMuteAudioClick_(e) {
    this.dispatch_(EventType.MUTE, e);
  }

  /**
   * @param {!Event} e
   * @private
   */
  onUnmuteAudioClick_(e) {
    this.dispatch_(EventType.UNMUTE, e);
  }

  /**
   * @param {string} eventType
   * @param {!Event=} opt_event
   * @private
   */
  dispatch_(eventType, opt_event) {
    if (opt_event) {
      dev().assert(opt_event).stopPropagation();
    }

    dispatch(this.getRoot(), eventType, /* opt_bubbles */ true);
  }

  /**
   * @param {number} index
   * @param {number} total
   */
  updateProgressBar(index, total) {
    const factor = index / total;

    this.getVsync_().mutate(() => {
      setStyles(this.progressEl_, {
        'transform': scale(`${factor},1`),
      });
    });
  }
}
