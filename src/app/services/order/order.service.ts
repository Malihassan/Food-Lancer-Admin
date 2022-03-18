import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  search(page: number, query: any) {
    return this.http.get(`admin/order/orders?page=${page}`, {
      params: {
        ...query,
      },
    });
  }
}

// function paginatedResults(model) {
// 	return async (req, res, next) => {
// 		const page = req.query.page;
// 		const limit = req.query.limit;

// 		const startIndex = (page - 1) * limit;
// 		const endIndex = page * limit;
// 		const results = {};

// 		if (endIndex < (await model.countDocuments().exec())) {
// 			results.next = {
// 				page: +page + 1,
// 				limit: +limit,
// 			};
// 		}
// 		if (startIndex > 0) {
// 			results.previous = {
// 				page: page - 1,
// 				limit: +limit,
// 			};
// 		}

// 		try {
// 			results.results = await model
// 				.find()
// 				.limit(limit)
// 				.skip(startIndex)
// 				.exec();
// 			res.paginatedResults = results;
// 			next();
// 		} catch (e) {
// 			res.status(500).json({ message: e.message });
// 		}
// 	};
// }
