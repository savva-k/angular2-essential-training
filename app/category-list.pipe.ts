import { Pipe } from '@angular/core'

@Pipe({
  name: 'categoryList',
  pure: true
})
export class CategoryListPipe {
  transform(mediaItems) {
    var categories = [];
    mediaItems.forEach(item => {
      if (categories.indexOf(item.category) >= -1) {
        categories.push(item.category);
      }
    });
    return categories.join(', ');
  }
}