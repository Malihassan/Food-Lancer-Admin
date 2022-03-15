import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  public isCollapsed = false;
  public addCategoryCollapsed = true
  categoryList: any = []
  newCategoryForm: FormGroup
  resError:string=''

  constructor(private fb: FormBuilder, private categoryServices: CategoryService) {
    this.newCategoryForm = this.fb.group({
      newCategoryName: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?![0-9._])(?!.*[0-9._]$)(?!.*\d_)(?!.*_\d)[a-zA-Z0-9_]+$')]]
    })
  }

  ngOnInit(): void {
    this.categoryServices.getCategories().subscribe((res: any) => {
      this.categoryList = res
    })
  }
  categoryHandler(id: string) {
    this.categoryServices.getCategoryById(id).subscribe((res: any) => {
      console.log(res);
    })
  }
  get newCategoryFormControl() {
    return this.newCategoryForm.controls
  }
  SubmitNewCategoryForm(name: string) {
    console.log(name);

    this.categoryServices.addCategory(name).subscribe(res => {
    }, (err) => {
      this.resError = err.error.error
    })


  }

}
