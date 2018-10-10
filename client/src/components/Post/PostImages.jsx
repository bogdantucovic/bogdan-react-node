import * as React from "react";
import Grid from "@material-ui/core/Grid";
import isEmpty from "lodash/isEmpty";

export default ({ posts }) => (
  <Grid spacing={16} container>
    {posts.map((item, key) => (
      <React.Fragment key={key.toString()}>
        {!isEmpty(item.img) && (
          <Grid xs={12} sm={6} item>
            <img
              style={{
                width: "100%",
                height: "300px"
              }}
              alt={item.message}
              src={`/assets/imgs/${item.img}`}
            />
          </Grid>
        )}
      </React.Fragment>
    ))}
  </Grid>
);
