WorkoutTracker.module("ExercisesApp.List", function (List, WorkoutTracker, Backbone, Marionette, $, _) {
	List.Layout = Marionette.LayoutView.extend({
		template: "#exercise-list-layout",

		regions: {
			filterRegion: ".filterRegion",
			listRegion: ".listRegion"
		}
	});

	List.Filter = Marionette.ItemView.extend({
		className: "row",
		template: "#exercise-list-filter"
	});

	List.TableRow = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#exercise-list-table-row"
	});

	List.Table = Marionette.CompositeView.extend({
		template: "#exercise-list-table",
		tagName: "table",
		className: "table table-striped table-bordered",
		childViewContainer: "tbody",
		childView: List.TableRow
	})
});