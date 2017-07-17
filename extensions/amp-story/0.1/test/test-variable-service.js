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
import {StateChangeType} from '../navigation-state';
import {VariableService} from '../variable-service';


describes.fakeWin('amp-story variable service', {}, env => {
  let win;
  let variableService;

  beforeEach(() => {
    variableService = new VariableService();
  });

  it('should update pageIndex and pageId on change', () => {
    variableService.onStateChange({
      type: StateChangeType.ACTIVE_PAGE,
      value: {
        pageIndex: 123,
        pageId: 'my-page-id',
      },
    });

    expect(variableService.pageIndex).to.equal(123);
    expect(variableService.pageId).to.equal('my-page-id');
  });

  it('should return empty string on pageId if page has no id', () => {
    variableService.onStateChange({
      type: StateChangeType.ACTIVE_PAGE,
      value: {
        pageIndex: 456,
      },
    });

    expect(variableService.pageIndex).to.equal(456);
    expect(variableService.pageId).to.equal('');
  });
});
