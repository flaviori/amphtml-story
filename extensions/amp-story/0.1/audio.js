import {dev} from '../../../src/log';
import {Services} from '../../../src/services';

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



/** @typedef {{ source: AudioBufferSourceNode, gainNode: GainNode }} */
let AudioSource;

/**
 * The volume to which audio should be reduced when other audio sources are
 * played.
 * @const {number}
 */
const REDUCED_VOLUME = 0.5;

/**
 * @const {number}
 */
const VOLUME_CHANGE_DURATION_MS = 500;

/**
 * @const {!function(number): number}
 */
const VOLUME_EASING_FN = input => input;

/**
 * @const {string}
 */
const PLAYABLE_ID_PREFIX = 'i-amphtml-playable-';


export class AudioManager {
  constructor(win, rootElement) {
    /** @private @const {!Object<!Element, !Playable>} */
    this.playables_ = {};

    /** @private @const {!Array<!Playable>} */
    this.nowPlaying_ = [];

    /** @private {number} */
    this.nextId_ = 0;

    /** @private {boolean} */
    this.isMuted_ = true;

    /** @private {!Window} */
    this.win_ = win;

    /** @private {!Element} */
    this.rootElement_ = rootElement;

    rootElement.addEventListener('play', e => {
      this.onMediaElementPlay_(e);
    }, true);

    rootElement.addEventListener('pause', e => {
      this.onMediaElementPause_(e);
    }, true);
  }

  /**
   * @param {!Element} sourceElement The element causing audio to be played.
   * @return {!Playable} The {@link Playable} instance to play the audio
   *     represented by the specified sourceElement.
   */
  createPlayable_(sourceElement) {
    if (!(sourceElement instanceof Element)) {
      dev().error('amp-story', 'Played item must be element.');
    }

    if (sourceElement instanceof HTMLMediaElement) {
      if (!sourceElement.muted) {
        return new MediaElementPlayable(this.win_, sourceElement);
      }
    } else if (sourceElement.hasAttribute('background-audio')) {
      return new BackgroundPlayable(this.win_, sourceElement);
    }
  }

  /**
   * @param {!Event} e
   */
  onMediaElementPlay_(e) {
    this.play(e.target);
  }

  /**
   * @param {!Event} e
   */
  onMediaElementPause_(e) {
    this.stop(e.target);
  }

  /**
   * @param {!Element} sourceElement
   * @return {?Playable}
   */
  getPlayable_(sourceElement) {
    return this.playables_[sourceElement.id];
  }

  load(sourceElement) {
    const playable = this.getPlayable_(sourceElement) ||
        this.createPlayable_(sourceElement);

    if (!playable) {
      return Promise.resolve();
    }

    if (!sourceElement.id) {
      sourceElement.id = `${PLAYABLE_ID_PREFIX}${this.nextId_++}`;
    }

    this.playables_[sourceElement.id] = playable;
    return playable.load();
  }

  /** @private */
<<<<<<< HEAD
  getMediaElementChildren_(element) {
=======
  getMediaElementChilden_(element) {
>>>>>>> 4a34b67f... Partial implementation of playing media embeds through AudioManager.
    return element.querySelectorAll('[background-audio], audio, video');
  }

  play(sourceElement) {
    this.playInternal_(sourceElement)
        .then(() => {
          const descendentPlayableElements =
              this.getMediaElementChilden_(sourceElement);

          descendentPlayableElements.forEach(descendentPlayableElement => {
            this.play(descendentPlayableElement);
          });
        });
  }

  playInternal_(sourceElement) {
    return this.load(sourceElement)
        .then(() => this.getPlayable_(sourceElement))
        .then(playable => {
          if (!playable) {
<<<<<<< HEAD
=======
            return;
          }

          playable.setVolume(/* volume */ 1, /* durationMs */ 0,
              VOLUME_EASING_FN);

          if (this.isMuted_) {
            playable.mute();
          }

          if (playable.isPlaying()) {
>>>>>>> 4a34b67f... Partial implementation of playing media embeds through AudioManager.
            return;
          }

          // Play the audio.
          this.addToNowPlaying_(playable);
          playable.play();
        });
  }

  /**
   * Stops the audio generated by a given element.
   * @param {!Element} sourceElement 
   */
  stop(sourceElement) {
    const playable = this.getPlayable_(sourceElement);
    if (!playable || !playable.isPlaying()) {
      return;
    }

    // Stop the audio.
    this.removeFromNowPlaying_(playable);
    playable.stop();
  }

  /**
   * Reduce the volume of the audio generated by a given element.
   * @param {!Element} sourceElement 
   * @param {number} volume 
   */
  setVolume(sourceElement, volume) {
    const playable = this.getPlayable_(sourceElement);
    if (!playable) {
      return;
    }

    playable.setVolume(volume, VOLUME_CHANGE_DURATION_MS, VOLUME_EASING_FN);
  }

  /**
   * Mutes all of the audio sources that are playing.
   */
  muteAll() {
    this.nowPlaying_.forEach(playable => {
      playable.mute();
    });
    this.isMuted_ = true;
  }

  /**
   * Unmutes all of the audio sources that are playing.
   */
  unmuteAll() {
    this.nowPlaying_.forEach(playable => {
      playable.unmute();
    });
    this.isMuted_ = false;
  }

  /**
   * @param {!Playable} playable The playable to add to the "Now Playing" list.
   * @private
   */
  addToNowPlaying_(playable) {
    this.nowPlaying_.push(playable);
    this.nowPlayingChanged_();
  }

  /**
   * @param {!Playable} playable The playable to remove from the "Now Playing"
   *     list.
   * @private
   */
  removeFromNowPlaying_(playable) {
    const index = this.nowPlaying_.indexOf(playable);
    this.nowPlaying_.splice(index, 1);
    this.nowPlayingChanged_();
  }


  nowPlayingChanged_() {
    // TODO(newmuis): Dispatch AUDIO_PLAYING iff this.nowPlaying_.length > 0; else AUDIO_STOPPED.

    this.nowPlaying_.forEach(playable => {
      // TODO(newmuis): Recalculate the volume of all playing audio.

      playable.setVolume(1 /* volume */, 0 /* durationMs */,
          VOLUME_EASING_FN);

      if (this.isMuted_) {
        playable.mute();
      }

      // Reduce the volume of ancestors.
      for (let el = playable.getSourceElement().parentElement; el;
          el = el.parentElement) {
        this.setVolume(el, REDUCED_VOLUME);
      }
    });
  }
}


class Playable {
  constructor(win, sourceElement) {
    /**
     * @protected @const {!Window}
     */
    this.win = win;

    /**
     * The element that is causing audio to be played.
     * @private @const {!Element}
     */
    this.sourceElement_ = sourceElement;
  }

  /**
   * @return {!Element} The element causing audio to be played.
   */
  getSourceElement() {
    return this.sourceElement_;
  }

  /**
   * Loads the resources necessary to play this item.  Should be a no-op if
   * called when the item is already loaded.
   * @return {!Promise} A promise that is resolved once the resource has been
   *     loaded.
   */
  load() {
    return Promise.resolve();
  }

  /**
   * @return {boolean} true, if this item's resources have been loaded.
   */
  isLoaded() {
    return false;
  }

  /**
   * Causes this item to start playing if it was not already playing.  load()
   * will be called before play() in all cases.  play() should be a no-op if the
   * item is already being played.
   */
  play() {}

  /**
   * Sets the volume of this item to the specified volume, over the specified
   * duration of time.
   *
   * @param {number} unusedVolume A volume from 0.0 (silent) to 1.0 (loudest).
   * @param {number} unusedDurationMs The duration over which the new volume
   *     should be achieved.
   * @param {!function(number): number} unusedEasingFn The easing function which
   *     describes the curve the volume should be modified.
   */
  setVolume(unusedVolume, unusedDurationMs, unusedEasingFn) {}

  /**
   * Causes this item to stop playing if it was playing.  stop() should be a
   * no-op if the item is already stopped.
   */
  stop() {}

  /**
   * Unloads the resources associated with this item.  Can be called to free up
   * resources.  Should be a no-op if called when the item is not yet loaded.
   */
  unload() {}

  /**
   * Mutes this item, without affecting its volume or play state.
   */
  mute() {
    this.sourceElement_.setAttribute('muted', '');
  }

  /**
   * Unmutes this item, without affecting its volume or play state.
   */
  unmute() {
    this.sourceElement_.removeAttribute('muted');
  }

  /**
   * @return {boolean} true, if this item is muted; false otherwise.
   */
  isMuted() {}
}


/**
 * A playable piece of audio loaded from a URI via XHR and played using the
 * WebAudio APIs.
 */
class BackgroundPlayable extends Playable {
  constructor(win, sourceElement) {
    super(win, sourceElement);

    /** @private @const {!AudioContext} */
    this.context_ = new (win.AudioContext || win.webkitAudioContext)();

    // TODO(newmuis): Assert source URI.
    /** @private @const {string} */
    this.sourceUri_ = sourceElement.getAttribute('background-audio');

    /** @private {?AudioBuffer} */
    this.buffer_ = null;

    /** @private {?AudioSource} */
    this.audioSource_ = null;

    /** @private {?number} */
    this.volume_ = null;

    /** @private {boolean} */
    this.isPlaying_ = false;
  }

  /**
   * 
   * @param {!AudioBuffer} buffer 
   */
  createSource_(buffer) {
    const source = this.context_.createBufferSource();
    const gainNode = this.context_.createGain();

    source.buffer = buffer;
    source.loop = true;
    source.connect(gainNode);
    gainNode.connect(this.context_.destination);

    this.audioSource_ = {
      source,
      gainNode,
    };
  }

  /**
   * Fetches the AudioBuffer from this Playable's source URI, and caches the
   * result for future invocations.
   *
   * @return {!Promise<!AudioBuffer>} A promise yielding the AudioBuffer result
   *     from this Playable's source URI.
   */
  getBuffer_() {
    if (this.buffer_) {
      return Promise.resolve(this.buffer_);
    }

    return Services.xhrFor(this.win)
        .fetch(this.sourceUri_)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => this.decodeAudioData_(arrayBuffer));
  }

  /** @override */
  isLoaded() {
    return !!this.audioSource_;
  }

  /** @override */
  isPlaying() {
    return this.isPlaying_;
  }

  /** @override */
  load() {
    if (this.isLoaded()) {
      return Promise.resolve();
    }

    return this.getBuffer_()
        .then(buffer => this.createSource_(buffer))
        .then(buffer => this.buffer_ = buffer);
  }


  /**
   * Transforms an ArrayBuffer into an audio buffer.
   * @param {!ArrayBuffer} arrayBuffer The array buffer containing the bytes of
   *     the audio to be decoded.
   * @return {!Promise<!AudioBuffer>}
   * @private
   */
  decodeAudioData_(arrayBuffer) {
    return new Promise((resolve, reject) => {
      this.context_.decodeAudioData(arrayBuffer,
          audioBuffer => resolve(audioBuffer), error => reject(error));
    });
  }

  /** @override */
  play() {
    this.load().then(() => this.playSource_());
  }

  /**
   * @private
   */
  playSource_() {
    if (this.audioSource_.source.start) {
      this.audioSource_.source.start(0);
    } else {
      this.audioSource_.source.noteOn(0);
    }

    this.isPlaying_ = true;
  }

  /** @override */
  setVolume(volume, durationMs, easingFn) {
    // TODO(newmuis): Fade to volume over durationMs following easingFn.
    this.volume_ = volume;
    this.setGain_(volume);
  }

  /**
   * @param {number} gain The gain value from 0 to 1.
   * @private
   */
  setGain_(gain) {
    this.audioSource_.gainNode.gain.value = gain;
  }

  /** @override */
  stop() {
    if (this.audioSource_.source.stop) {
      this.audioSource_.source.stop(0);
    } else {
      this.audioSource_.source.noteOff(0);
    }
    this.audioSource_ = null;
    this.isPlaying_ = false;
  }

  /** @override */
  unload() {
    this.audioSource_ = null;
    this.buffer_ = null;
  }

  /** @override */
  mute() {
    super.mute();
    this.setGain_(0);
  }

  /** @override */
  unmute() {
    super.unmute();
    this.setGain_(this.volume_);
  }

  /** @override */
  isMuted() {
    return !this.volume_;
  }
}


/**
 * An HTMLMediaElement that potentially has audio.
 */
class MediaElementPlayable extends Playable {
<<<<<<< HEAD
  constructor(win, element) {
    super(win, element);
=======
  constructor(element) {
    super(dev().assertElement(element));
>>>>>>> 4a34b67f... Partial implementation of playing media embeds through AudioManager.
    this.element_ = element;
  }

  /** @override */
  isLoaded() {
    return !!this.element_;
  }

  /** @override */
  isPlaying() {
    return !this.element_.paused;
  }

  /** @override */
  play() {
    this.element_.play();
  }

  /** @override */
  setVolume(volume, durationMs, easingFn) {
    // TODO(newmuis): Fade to volume over durationMs following easingFn.
    this.element_.volume = volume;
  }

  /** @override */
  stop() {
    this.element_.pause();
    this.element_.currentTime = 0;
  }

  /** @override */
  mute() {
    super.mute();
    this.element_.muted = true;
  }

  /** @override */
  unmute() {
    super.unmute();
    this.element_.muted = false;
  }

  /** @override */
  isMuted() {
    return this.element_.muted;
  }
}
