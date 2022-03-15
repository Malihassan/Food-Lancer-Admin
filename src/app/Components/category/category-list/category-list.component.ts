import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from './../../../services/product/product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  @Output() productsByStatus: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();
  statusArray: any = [];
  public isCollapsed = false;
  public addCategoryCollapsed = true;
  public editCategoryCollapsed = true;
  categoryList: any = [];
  newCategoryForm: FormGroup;
  editCategoryForm: FormGroup;
  resError: string = '';
  editCategory = false;

  constructor(
    private fb: FormBuilder,
    private categoryServices: CategoryService,
    private productService: ProductServiceService
  ) {
    this.newCategoryForm = this.fb.group({
      newCategoryName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(
            '^(?![0-9._])(?!.*[0-9._]$)(?!.*d_)(?!.*_d)[a-zA-Z0-9_]+$'
          ),
        ],
      ],
    });
    this.editCategoryForm = this.fb.group({
      editCategoryName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(
            '^(?![0-9._])(?!.*[0-9._]$)(?!.*d_)(?!.*_d)[a-zA-Z0-9_]+$'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryServices.getCategories().subscribe((res: any) => {
      res.map((item: any) => (item.toggle = true));
      this.categoryList = res;
    });
  }
  editCategoryHandler(id: string) {
    this.editCategory = true;
    console.log('hereeeeeee');

    // this.categoryServices.getCategoryById(id).subscribe((res: any) => {
    //   console.log(res);
    // })
  }
  deleteCategoryHandler(id: string) {
    this.categoryServices.deleteCategory(id).subscribe((res) => {
      this.getCategories();
    });
  }
  get newCategoryFormControl() {
    return this.newCategoryForm.controls;
  }
  get editCategoryFormControl() {
    return this.editCategoryForm.controls;
  }
  SubmitNewCategoryForm(name: string) {
    console.log(name);

    this.categoryServices.addCategory(name).subscribe(
      (res) => {
        this.getCategories();
      },
      (err) => {
        this.resError = err.error.error;
      }
    );
  }
  SubmitEditCategoryForm(id: string, name: string) {
    this.categoryServices.updateCategory(id, name).subscribe((res) => {
      this.getCategories();
    });
  }
  onCheckboxChange(e: any) {
    const checkedValue = e.target.value;
    const isChecked = e.target.checked;
    if (!isChecked) {
      this.statusArray = this.statusArray.filter(
        (item: string) => item !== checkedValue
      );
      //this.productsByStatus.emit(this.statusArray);
      return;
    }
    this.statusArray.push(checkedValue);
    //this.productsByStatus.emit(this.statusArray);
    console.log(this.statusArray);

    this.productService.getStatus(this.statusArray);
  }
}
