import { Mongo } from "meteor/mongo";

export const ArticlesCollection = new Mongo.Collection("articles");

export const mockedArticles = [
  {
    _id: "1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin scelerisque molestie. Phasellus finibus sed nunc vitae iaculis. Integer eu diam sed enim aliquam imperdiet sed et tortor. Aliquam ultricies diam nisl, a accumsan nibh vestibulum sed. Donec tristique, nunc eget vulputate faucibus, lectus elit sollicitudin ex, et tempus purus turpis id eros. Duis eu pulvinar lacus, non dapibus odio. Nunc urna nisi, hendrerit sit amet commodo vel, condimentum eget leo. Vivamus eget varius leo. Fusce condimentum elementum diam non bibendum. Duis rutrum quam eu libero congue finibus. Sed sodales vel est lacinia cursus.",
  },
  {
    _id: "2",
    text: "Quisque imperdiet aliquam aliquam. Mauris aliquam egestas luctus. Curabitur faucibus aliquet purus placerat bibendum. Vestibulum sed laoreet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tellus et libero convallis vestibulum. Vivamus leo nisi, fermentum vitae nulla quis, rutrum malesuada lectus.",
  },
  {
    _id: "3",
    text: "Praesent et tempor nisi, eu lacinia nisi. Phasellus nec tortor non nisi scelerisque tristique tempor et felis. Nunc vehicula justo id pharetra dignissim. Quisque non felis ornare, finibus lacus a, ornare tellus. Mauris scelerisque tellus eu mi semper, sed scelerisque massa hendrerit. Donec vel ligula non mauris dapibus convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc congue nibh non dolor aliquet, ac iaculis purus vehicula. Aliquam purus lorem, imperdiet at ornare faucibus, condimentum in lectus. Fusce eleifend, neque vitae tincidunt malesuada, eros dolor condimentum augue, ac tristique nisi justo a odio.",
  },
  {
    _id: "4",
    text: "In ac augue vitae magna suscipit mattis eget sed diam. Proin ultrices purus id pretium congue. Nulla tristique tellus ut finibus bibendum. Nam efficitur nunc sit amet eros tincidunt, vitae efficitur nunc posuere. Sed eget augue non risus laoreet venenatis eu porttitor nisl. In volutpat dui scelerisque tempus ullamcorper. Vestibulum sed sodales urna. Integer dictum augue libero, quis consequat dolor feugiat quis. Vestibulum mattis arcu eget nisl consectetur congue. Aenean laoreet, lectus vel ultrices egestas, justo ex sollicitudin diam, id finibus tellus metus vitae ligula. Mauris luctus libero et nulla hendrerit, vitae facilisis lectus molestie. Integer erat purus, maximus sed facilisis nec, finibus pulvinar ex.",
  },
];
